import React, { Component } from 'react'
import { AtiCard, AtiDatePicker, AtiSelectBox, AtiTextAreaField, AtiButton, AtiTableForm, AtiTable, AtiFieldError, AtiTextbox, AtiTextBoxSearchPopup } from 'ati-react-web';
import { Row, Col, Table } from 'antd'
import { sortData } from '../../../common/utils/table-utils';
import { AtiForm, AtiField } from 'ati-reduxform-web';


class InputSection extends Component {
    render() {
        const { onDateChanged,transactionType,
                initialData,onValueChanges,validation,
                resetFilter,categoryType,onSelectCategory,
                onValueChangesTable,onSelectCategoryTable } = this.props
        
        return (
            <React.Fragment>
                <AtiCard
                    isLoading={false}
                    hoverable
                    cardTitle="Input Your Daily Income and Expenditure"
                    content={
                        <div>
                            <AtiForm
                                initialValues={initialData}
                                // onSubmit={onSubmitForm}
                                formId="input-form"
                                validation={validation}

                            >
                            <Row type='flex' justify='start'>
                                <Col span={8}>
                                    <p className='text-secondary'>
                                        Select Date
                                </p>
                                </Col>
                                <Col span={16}>
                                    <AtiField name="date">
                                        <AtiDatePicker
                                            id="dateInput"
                                            name="dateInput"
                                            value={Date.now()}
                                            dateFormat="DD-MM-YYYY"
                                        />
                                        <AtiFieldError />
                                    </AtiField>
                                </Col>
                            </Row>
                            <Row type='flex' justify='start'>
                                <Col span={8}>
                                    <p className='text-secondary'>
                                        Select Transaction
                                </p>
                                </Col>
                                <Col span={16}>
                                    <AtiField name="transaction">
                                        <AtiSelectBox
                                            id="transaction"
                                            name="transaction"
                                            events={{onItemChanged:onValueChanges}}
                                            value={initialData.transaction}
                                            placeholder='select your type of transaction'
                                            data={transactionType}
                                        />
                                        <AtiFieldError />
                                    </AtiField>
                                </Col>
                            </Row>
                            <Row type='flex' justify='start'>
                                <Col span={8}>
                                    <p className='text-secondary'>
                                        Select Category
                                </p>
                                </Col>
                                <Col span={16}>
                                    <AtiField name="category">
                                        <AtiSelectBox
                                            id="category"
                                            name="category"
                                            placeholder='select your type of category'
                                            data={categoryType}
                                            events={{onItemChanged:onSelectCategory}}
                                            value={initialData.category}
                                        />
                                        <AtiFieldError />
                                    </AtiField>
                                </Col>
                            </Row>
                            <Row type='flex' justify='start'>
                                <Col span={8}>
                                    <p className='text-secondary'>
                                        Notes
                                </p>
                                </Col>
                                <Col span={16}>
                                    <AtiField name="notes">
                                        <AtiTextAreaField
                                            id="notes"
                                            name="notes"
                                            value={initialData.notes}
                                            events={{ onChange : onValueChanges }}
                                            placeholder="write your notes here"
                                        />
                                        <AtiFieldError />
                                    </AtiField>
                                </Col>
                            </Row>
                            <Row type='flex'>
                                <Col span={24} align='right'>
                                    <AtiButton
                                        text="Input"
                                        className='btn-outline-success'
                                        size='lg'
                                    />
                                </Col>
                            </Row>
                            </AtiForm>
                        </div>
                    }
                /> 
                <AtiCard
                    isLoading={false}
                    extraStyle={{minHeight:'500px'}}
                    content={
                        <div>
                        <Row type='flex' justify='space-between'>
                            <p className='text-secondary'>
                                Daily Table
                            </p>
                            <AtiDatePicker
                                defaultValue={initialData.date}
                                dateFormat="DD-MM-YYYY"
                                events={
                                    {
                                        onDateChange:(e) => {
                                            onDateChanged(e)
                                        }
                                    }
                                }
                            />
                        </Row>
                        <Row type='flex'>
                            <Col span={5} style={{marginRight:'10px'}}>
                                <AtiSelectBox 
                                    placeholder='filter transaction'
                                    events={{onItemChanged:onValueChangesTable}}
                                    value={initialData.transactionTable}
                                    data={transactionType}
                                    />
                            </Col>
                            <Col span={5} style={{marginRight:'10px'}}>
                                <AtiSelectBox
                                    events={{onItemChanged:onSelectCategoryTable}}
                                    placeholder='filter category'
                                    data={initialData.master_kategoriTable}
                                    value={initialData.categoryTable}
                                    
                                />
                            </Col>
                            <Col span={5} style={{marginRight:'10px'}}>
                                <AtiTextbox 
                                    id='search-notes'
                                    name='searchnotes'
                                    value={initialData.searchNotes}
                                    events={{onChange:onValueChangesTable}}
                                    placeholder='search notes'
                                />
                            </Col>
                            <Col span={5} style={{marginRight:'10px'}}>
                                <AtiTextbox 
                                    placeholder='search amount'
                                />
                            </Col>
                            <Col span={2} >
                                <AtiButton 
                                    text='reset filter'
                                    className='btn btn-outline-danger'
                                    events={{onClick:resetFilter}}
                                    icon="reload"
                                />
                            </Col>

                        </Row>
                        <Row type='flex'>
                            <Table 
                                loading={initialData.isLoading}
                                dataSource={initialData.dataTable}
                                columns={initialData.columns}
                                style={{width:'100%'}}
                            />
                            
                        </Row>
                        </div>
                    }
                />
            </React.Fragment>
        )
    }
}

export default InputSection