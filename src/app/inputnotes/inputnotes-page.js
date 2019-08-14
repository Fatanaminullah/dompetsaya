import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getData } from '../../modules/inputnotes/store/notes-action'
import { getCategory, getTransaction } from '../../modules/settings/store/setting-action'
import FinanceRecordsComponent from '../../modules/inputnotes/component/financeRecordsComponent'
import { Row, Popconfirm } from 'antd'
import Cookies from 'universal-cookie';
const moment = require('moment');

const cookie = new Cookies()

class FinanceRecordsPage extends Component {
    state = {
        columns: [
            {
                title: 'Transaction',
                dataIndex: 'transaction',
                key: 'transaction',
                sorter: (a, b) => a.transaction - b.transaction
            },
            {
                title: 'Category',
                dataIndex: 'category',
                key: 'category',
                sorter: (a, b) => a.category - b.category
            },
            {
                title: 'Notes',
                dataIndex: 'notes',
                key: 'notes',
                sorter: (a, b) => a.notes - b.notes
            },
            {
                title: 'Amount',
                dataIndex: 'amount',
                key: 'amount',
                sorter: (a, b) => a.amount - b.amount
            },
            {
                title: 'Action',
                dataIndex: 'action',
                width: '12%',
                align: 'center',
                render: (text, record) => {
                    return (
                        <Row type='flex' justify='space-between'>
                            <a className='text-primary' onClick={() => { this.onClickEditTable(record.id, record.transactionType) }}>
                                Edit
                            </a>
                            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.id)}>
                                <a href="javascript:;" className='text-danger'>Delete</a>
                            </Popconfirm>

                        </Row>
                    )
                }
            }
        ],
        date: Date.now(),
        dateInput: Date.now(),
        isLoading: true,
        dataTable: [],
        notes: '',
        transaction: 1,
        transactionTable: '',
        category: 1,
        categoryTable: '',
        master_kategori: [],
        master_kategoriTable: [],
        searchNotes: '',
        minAmount: '',
        maxAmount: ''
    }

    componentDidMount() {
        this.props.getData(cookie.get('id'))
        this.props.getCategory()
        this.props.getTransaction()

    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props !== prevProps) {
            this.setState({ isLoading: false })
            this.filterDataTable()
            this.filterCategory()
            this.filterCategoryTable()
        }
        if (prevState.transaction !== this.state.transaction) {
            this.filterCategory()
        } else if (prevState.date !== this.state.date ||
            prevState.transactionTable !== this.state.transactionTable ||
            prevState.categoryTable !== this.state.categoryTable ||
            prevState.searchNotes !== this.state.searchNotes ||
            prevState.minAmount !== this.state.minAmount ||
            prevState.maxAmount !== this.state.maxAmount
        ) {
            this.filterDataTable()
            this.filterCategoryTable()
        }
    }

    filterDataTable = () => {
        var data = this.props.report.filter(item => {
            var date = new Date(item.date)
            var dateState = new Date(this.state.date)
            var min = parseInt(this.state.minAmount)
            var max = parseInt(this.state.maxAmount)
            
            if (
                isNaN(parseInt(this.state.transactionTable)) &&
                isNaN(parseInt(this.state.categoryTable)) &&
                isNaN(min) &&
                isNaN(max) &&
                this.state.searchNotes.length === 0
            ) {
                return (
                    date.getDate() === dateState.getDate()
                )
            } else if (
                isNaN(parseInt(this.state.transactionTable)) &&
                isNaN(parseInt(this.state.categoryTable)) &&
                isNaN(min) &&
                isNaN(max)
            ) {
                return (
                    date.getDate() === dateState.getDate() &&
                    item.notes.toLowerCase().includes(this.state.searchNotes)
                )
            }else if(
                isNaN(parseInt(this.state.transactionTable)) &&
                isNaN(parseInt(this.state.categoryTable)) &&
                isNaN(max) &&
                this.state.searchNotes.length === 0
                ){
                return(
                    date.getDate() === dateState.getDate() &&
                    item.amount >= min
                )
            }else if(
                isNaN(parseInt(this.state.transactionTable)) &&
                isNaN(parseInt(this.state.categoryTable)) &&
                isNaN(min) &&
                this.state.searchNotes.length === 0
            ){  
                return(
                    date.getDate() === dateState.getDate() &&
                    item.amount <= max
                )
            }else if(
                isNaN(parseInt(this.state.categoryTable)) &&
                isNaN(min) &&
                isNaN(max) &&
                this.state.searchNotes.length === 0
            ){
                return(
                    date.getDate() === dateState.getDate() &&
                    item.transactionId === this.state.transactionTable
                )
    
            }else if(
                isNaN(parseInt(this.state.transactionTable)) &&
                isNaN(parseInt(this.state.categoryTable)) &&
                this.state.searchNotes.length === 0
            ){
                return(
                    date.getDate() === dateState.getDate() &&
                    item.amount >= min &&
                    item.amount <= max
                )
            }else if(
                this.state.searchNotes.length === 0 &&
                isNaN(min) &&
                isNaN(max)
            ){
                return(
                    date.getDate() === dateState.getDate() &&
                    item.transactionId === this.state.transactionTable &&
                    item.categoryId === this.state.categoryTable
                )
            }else if(
                isNaN(parseInt(this.state.transactionTable)) &&
                isNaN(parseInt(this.state.categoryTable)) &&
                isNaN(max)
            ){
                return(
                    date.getDate() === dateState.getDate() &&
                    item.notes.toLowerCase().includes(this.state.searchNotes) &&
                    item.amount >= min
                )
            }else if(
                isNaN(parseInt(this.state.transactionTable)) &&
                isNaN(parseInt(this.state.categoryTable)) &&
                isNaN(min)
            ){
                return(
                    date.getDate() === dateState.getDate() &&
                    item.notes.toLowerCase().includes(this.state.searchNotes) &&
                    item.amount <= max
                )
            }else if(
                isNaN(max) &&
                isNaN(min)
            ){
                return(
                    date.getDate() === dateState.getDate() &&
                    item.notes.toLowerCase().includes(this.state.searchNotes) &&
                    item.transactionId === this.state.transactionTable &&
                    item.categoryId === this.state.categoryTable
                )
            }else if(
                isNaN(max) &&
                this.state.searchNotes.length === 0
            ){
                return(
                    item.transactionId === this.state.transactionTable &&
                    item.categoryId === this.state.categoryTable &&
                    item.amount >= min
                )
            }else if(
                isNaN(min) &&
                this.state.searchNotes.length === 0
            ){
                return(
                    item.transactionId === this.state.transactionTable &&
                    item.categoryId === this.state.categoryTable &&
                    item.amount <= max
                )
            }else if(
                isNaN(parseInt(this.state.transactionTable)) &&
                isNaN(parseInt(this.state.categoryTable))
            ){
                return(
                    item.notes.toLowerCase().includes(this.state.searchNotes) &&
                    item.amount <= max &&
                    item.amount >= min
                )
            }else{
                return(
                    item.transactionId === this.state.transactionTable &&
                    item.categoryId === this.state.categoryTable &&
                    item.notes.toLowerCase().includes(this.state.searchNotes) &&
                    item.amount <= max &&
                    item.amount >= min
                )
            }
        })
        this.setState({
            dataTable: data
        })

    }
    filterCategory = () => {
        var arrCategory1
        var arrCategory2

        arrCategory1 = this.props.master_kategori.filter(items => {

            return items.transactionId === this.state.transaction
        })

        arrCategory2 = arrCategory1.map(item => {
            return ({
                value: item.id,
                label: item.categoryName
            })
        })
        this.setState({ master_kategori: arrCategory2 })
    }
    filterCategoryTable = () => {
        var arrCategory1
        var arrCategory2
        arrCategory1 = this.props.master_kategori.filter(items => {

            return items.transactionId === this.state.transactionTable
        })
        arrCategory2 = arrCategory1.map(item => {
            return ({
                value: item.id,
                label: item.categoryName
            })
        })
        this.setState({ master_kategoriTable: arrCategory2 })
    }

    onValueChanges = e => {
        if (e.target !== undefined) {
            if (e.target.id === "notes") {
                this.setState({ notes: e.target.value })
            }
        } else {
            this.setState({ transaction: e.value })
        }
    }
    onValueChangesTable = e => {
        if (e.target !== undefined) {
            if (e.target.id === "search-notes") {
                this.setState({ searchNotes: e.target.value })
            }
        } else {
            this.setState({ transactionTable: e.value })
        }
    }
    onChangeMinAmount = e => {
        this.setState({ minAmount: e.value })
    }
    onChangeMaxAmount = e => {
        this.setState({ maxAmount: e.value })
    }
    onSelectCategory = e => {
        this.setState({ category: e.value })
    }
    onSelectCategoryTable = e => {
        this.setState({ categoryTable: e.value })
    }
    validate = (values) => {
        const errors = {};
        console.log(values);

        if (!values.notes) {
            errors.username = 'This field is required';
        }
        return errors;
    }
    resetFilter = () => {
        var data = this.props.report.filter(item => {
            var date = new Date(item.date)
            var dateState = new Date(this.state.date)
            return date.getDate() === dateState.getDate()
        })
        this.setState({ dataTable: data })
    }
    onDateChanged = e => {
        this.setState({
            date: e._d.toJSON()
        })
    }

    onDateInputChanged = e => {
        this.setState({
            dateInput: e._d.toJSON()
        })
    }

    onLoading = () => {
        if (this.props.report.length !== 0) {
            this.setState({ isLoading: false })
        } else {
            this.setState({ isLoading: true })
        }
    }

    render() {
        return (
            <FinanceRecordsComponent
                initialData={this.state}
                onDateChanged={this.onDateChanged}
                onDateInputChanged={this.onDateInputChanged}
                transactionType={this.props.transaction_type}
                categoryType={this.state.master_kategori}
                validation={this.validate}
                onValueChanges={this.onValueChanges}
                onValueChangesTable={this.onValueChangesTable}
                onSelectCategory={this.onSelectCategory}
                onSelectCategoryTable={this.onSelectCategoryTable}
                resetFilter={this.resetFilter}
                onChangeMinValue={this.onChangeMinAmount}
                onChangeMaxValue={this.onChangeMaxAmount}
            />
        )
    }
}

const mapStateToProps = state => ({
    ...state.notes, ...state.setting
});

const mapDispatchToProps = (dispatch => ({
    getData, getCategory, getTransaction
}))();



export default connect(mapStateToProps, mapDispatchToProps)(FinanceRecordsPage)