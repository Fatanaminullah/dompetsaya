import React, { Component } from 'react'
import { connect } from 'react-redux'
import SettingComponent from '../../modules/settings/component/settingComponent';
import { getCategory, getTransaction, addCategory,deleteCategory,editCategory} from '../../modules/settings/store/setting-action'
import { getProfile,editBalance } from '../../modules/profile/store/profile-action'
import { AtiSelectBox, AtiTextbox, AtiButton,AtiMessage } from 'ati-react-web';
import { Popconfirm, Row } from 'antd'
import Cookies from 'universal-cookie';

const cookie = new Cookies()

class SettingPage extends Component {

    state = {
        minBalance:'',
        minRange:100000,
        maxRange:10000000,
        showError:false,
        editId:'',
        category:'',
        transaction:'',
        modalAddCategory:false,
        modalEditCategory:false,
        isLoading: false,
        editBalance:false,
        notified:'',
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
        this.props.getProfile(cookie.get('id'))
    }
    componentDidUpdate(prevProps){
        if(prevProps.personalInfo !== this.props.personalInfo){
            this.setState({minBalance:this.props.personalInfo[0].minimum_balance,notified:this.props.personalInfo[0].notified})
        }
    }
    editBalance = () => {
        this.setState({editBalance:!this.state.editBalance})
    }
    saveBalance = () => {
        const {minBalance,notified} = this.state
        this.props.editBalance(cookie.get('id'),minBalance,notified)
        this.setState({editBalance:!this.state.editBalance})
    }
    onBalanceChanged = e =>{      
        this.setState({minBalance:e})
    }
    onSelectTransaction = e => {
        this.setState({
            transaction:e.value
        })
    }
    onChangedNotified = e => {
        e === true ? this.setState({notified:'YES'}) : this.setState({notified:'NO'})
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
            modalAddCategory:false
        })
    }
    render() {
        this.props.master_kategori.length == 0 
        ? this.state.isLoading = true 
        : this.state.isLoading = false


        return (
            <SettingComponent
                initialData={this.state}
                transaction_type={this.props.transaction_type}
                dataTable={this.props.master_kategori}
                onClickAddCategory={this.onClickAddCategory}
                onClickCancelCategory={this.onCancelAddCategory}
                onSelectTransaction={this.onSelectTransaction}
                onChangedCategory={this.onChangedCategory}
                onAddCategory={this.onAddCategory}
                onCancelEditCategory={this.onCancelEditCategory}
                onEditCategory={this.onEditCategory}
                onBalanceChanged={this.onBalanceChanged}
                onEditBalance={this.editBalance}
                onChangedNotified={this.onChangedNotified}
                saveBalance={this.saveBalance}
            />
        )
    }
}

const mapStateToProps = state => ({
    ...state.profile, ...state.setting
});

const mapDispatchToProps = (dispatch => ({
    getCategory, getTransaction, addCategory, deleteCategory,editCategory,getProfile,editBalance
}))();

export default connect(mapStateToProps, mapDispatchToProps)(SettingPage)