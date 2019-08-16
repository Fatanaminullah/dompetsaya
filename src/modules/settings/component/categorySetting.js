import React , { Component } from 'react'
import { Table, Row, Icon } from 'antd';
import { AtiSelectBox, AtiButton, AtiModals, AtiTextbox, AtiTable } from 'ati-react-web';

class CategorySetting extends Component {
    render(){
        const { 
            dataTable,onClickAddCategory,onClickCancelCategory,
            transaction_type,onSelectTransaction,onChangedCategory,
            onAddCategory,onCancelEditCategory,onEditCategory,
            initialData} = this.props
        return(
            <React.Fragment>
                <AtiModals
                    header={<div><h5>Add Category</h5></div>} 
                    footer={
                    <Row type='flex' justify='space-around'>
                        <AtiButton 
                            text='Cancel'
                            className='btn btn-outline-danger mx-1'
                            events={
                                {onClick: () => {onClickCancelCategory()}}
                            }
                        />
                        <AtiButton 
                            text='Add'
                            className='btn btn-outline-success mx-1'
                            events={
                                {onClick: () => {onAddCategory()}}
                            }
                        />
                    </Row>}
                    isOpen={initialData.modalAddCategory}
                    >
                        <div>
                            <Row type='flex' justify='left'>
                                <AtiSelectBox 
                                    id='transactiontype'
                                    name='transactiontype'
                                    data={transaction_type}
                                    label="Select Transaction Type"
                                    events={
                                        {onItemChanged:onSelectTransaction}
                                    }
                                    value={initialData.transaction}
                                />
                            </Row>
                            <Row type='flex' justify='left'>
                                <AtiTextbox 
                                    id='categoryname'
                                    name='categoryname'
                                    label='Input Category Name'
                                    placeholder='Write category name here...'
                                    showError={initialData.showError}
                                    value={initialData.category}
                                    events={
                                        {onChange:onChangedCategory}
                                    }
                                />
                            </Row>
                        </div>
                    </AtiModals>
                <AtiModals
                    header={<div><h5>Edit Category</h5></div>} 
                    footer={
                    <Row type='flex' justify='space-around'>
                        <AtiButton 
                            text='Cancel'
                            className='btn btn-outline-danger mx-1'
                            events={
                                {onClick: () => {onCancelEditCategory()}}
                            }
                        />
                        <AtiButton 
                            text='Save'
                            className='btn btn-outline-success mx-1'
                            events={
                                {onClick: () => {onEditCategory(initialData.editId)}}
                            }
                        />
                    </Row>}
                    isOpen={initialData.modalEditCategory}
                    >
                        <div>
                            <Row type='flex' justify='left'>
                                <AtiSelectBox 
                                    id='transactiontype'
                                    name='transactiontype'
                                    data={transaction_type}
                                    label="Select Transaction Type"
                                    events={
                                        {onItemChanged:onSelectTransaction}
                                    }
                                    value={initialData.transaction}
                                />
                            </Row>
                            <Row type='flex' justify='left'>
                                <AtiTextbox 
                                    id='categoryname'
                                    name='categoryname'
                                    label='Input Category Name'
                                    placeholder='Write category name here...'
                                    showError={initialData.showError}
                                    value={initialData.category}
                                    events={
                                        {onChange:onChangedCategory}
                                    }
                                />
                            </Row>
                        </div>
                    </AtiModals>

                <Row type='flex' justify='end' className='my-3'>
                    <AtiButton 
                        text={<span><Icon type='plus'/>Add Category</span>}
                        className='btn btn-success'
                        events={{
                            onClick:() => {onClickAddCategory()}
                        }}
                    />
                </Row>
                <Row style={{backgroundColor:'#fff'}}>
                <Table 
                    columns={initialData.columnTable}
                    dataSource={dataTable}
                    pagination={{
                        defaultPageSize:5
                    }}
                />
                </Row>
            </React.Fragment>
        )
    }
}

export default CategorySetting