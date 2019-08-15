import React, { Component } from 'react'
import { connect } from 'react-redux'
import SettingComponent from '../../modules/settings/component/settingComponent';
import { getCategory, getTransaction, addCategory,deleteCategory,editCategory} from '../../modules/settings/store/setting-action'
import { AtiSelectBox, AtiTextbox, AtiButton,AtiMessage } from 'ati-react-web';
import { Popconfirm, Row } from 'antd'

class SettingPage extends Component {

    state = {
        showError:false,
        editId:'',
        category:'',
        transaction:'',
        modalAddCategory:false,
        modalEditCategory:false,
        isLoading: false,
        columnTable: [
            {
                title:'ID',
                dataIndex:'id',
                align:'left',
                width:'5%'
            },
            {
                title: 'Transaction Type',
                dataIndex: 'transactionType',
                editable: 'true',
                align:'left'
            },
            {
                title: 'Category Name',
                dataIndex: 'categoryName',
                editable: 'true',
                align:'left'
            },
            {
                title: 'Action',
                dataIndex: 'action',
                width:'12%',
                align:'center',
                render: (text,record) => {
                    return(
                        <Row type='flex' justify='space-between'>
                            <a className='text-primary' onClick={() => {this.onClickEditCategory(record.id,record.transactionType)}}>
                                Edit
                            </a>
                            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.id)}>
                                <a href="javascript:;" className='text-danger'>Delete</a>
                            </Popconfirm>

                        </Row>
                    )
                }
            }
        ]
    }

    componentDidMount() {
        this.props.getCategory()
        this.props.getTransaction()
    }

    onSelectTransaction = e => {
        this.setState({
            transaction:e.value
        })
    }

    onChangedCategory = e => {
        this.setState({
            category:e.target.value
        })
    }

    onAddCategory = () => {
        const {transaction,category} = this.state
        this.props.addCategory(transaction,category)
        this.setState({
            modalAddCategory:false
        })
    }


    handleDelete = (id) => {
        this.props.deleteCategory(id)
    }


    onClickAddCategory = () => {
        this.setState({
            modalAddCategory:true
        })
    }

    onClickEditCategory = (id,transactionType) => {
        this.setState({
            modalEditCategory:true
        })
        this.props.master_kategori.filter(item => {
            if(item.id == id){
                this.setState({
                    category:item.categoryName,
                    editId:item.id
                })
            }
        })
        this.props.transaction_type.filter(item => {
            if(item.label == transactionType) {
                this.setState({
                    transaction:item.value
                })
            }
        })
        
        

    }

    onEditCategory = (id) => {
        const { transaction,category } = this.state
        this.props.editCategory(id,transaction,category)
        this.setState({
            transaction:'',
            category:'',
            modalEditCategory:false
        })
    }

    onCancelEditCategory = () => {
        this.setState({
            modalEditCategory:false
        })
    }

    onCancelAddCategory = () => {
        this.setState({
            isOpen:false
        })
    }

    
    render() {
        this.props.master_kategori.length == 0 
        ? this.state.isLoading = true 
        : this.state.isLoading = false


        return (
            <SettingComponent
                isLoading={this.state.isLoading}
                transaction_type={this.props.transaction_type}
                columnTable={this.state.columnTable}
                dataTable={this.props.master_kategori}
                onClickAddCategory={this.onClickAddCategory.bind(this)}
                modalAddCategory={this.state.modalAddCategory}
                modalEditCategory={this.state.modalEditCategory}
                onClickCancelCategory={this.onCancelAddCategory.bind(this)}
                showError={this.state.showError}
                onSelectTransaction={this.onSelectTransaction}
                transaction={this.state.transaction}
                category={this.state.category}
                onChangedCategory={this.onChangedCategory}
                onAddCategory={this.onAddCategory.bind(this)}
                onCancelEditCategory={this.onCancelEditCategory}
                onEditCategory={this.onEditCategory}
                editId={this.state.editId}
            />
        )
    }
}

const mapStateToProps = state => ({
    ...state.layout, ...state.setting
});

const mapDispatchToProps = (dispatch => ({
    getCategory, getTransaction, addCategory, deleteCategory,editCategory
}))();

export default connect(mapStateToProps, mapDispatchToProps)(SettingPage)