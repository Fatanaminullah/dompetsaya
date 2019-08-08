import React, { Component } from 'react'
import { AtiCard, AtiDatePicker, AtiSelectBox, AtiTextAreaField, AtiButton, AtiTableForm, AtiTable } from 'ati-react-web';
import { Row, Col, Table } from 'antd'
import { sortData } from '../../../common/utils/table-utils';


class InputSection extends Component {
    render() {
        const dataSource = [
            {
              key: '1',
              transaction: 'Pengeluaran',
              category: 'Makan/Minum',
              notes: 'Makan Siang di Kantin',
              amount:'Rp 25,000'
            },
          ];
          
          const columns = [
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
            }
          ];
        return (
            <React.Fragment>
                <AtiCard
                    isLoading={false}
                    hoverable
                    cardTitle="Input Your Daily Income and Expenditure"
                    content={
                        <div>
                            <Row type='flex' justify='start'>
                                <Col span={8}>
                                    <p className='text-secondary'>
                                        Select Date
                                </p>
                                </Col>
                                <Col span={16}>
                                    <AtiDatePicker
                                        value={Date.now()}
                                        dateFormat="DD-MM-YYYY"
                                    />
                                </Col>
                            </Row>
                            <Row type='flex' justify='start'>
                                <Col span={8}>
                                    <p className='text-secondary'>
                                        Select Transaction
                                </p>
                                </Col>
                                <Col span={16}>
                                    <AtiSelectBox
                                        placeholder='select your type of transaction'
                                        data={[
                                            { label: 'Income(Pemasukan)', value: 'in' },
                                            { label: 'Expense(Pengeluaran)', value: 'out' }
                                        ]}
                                    />
                                </Col>
                            </Row>
                            <Row type='flex' justify='start'>
                                <Col span={8}>
                                    <p className='text-secondary'>
                                        Select Category
                                </p>
                                </Col>
                                <Col span={16}>
                                    <AtiSelectBox
                                        placeholder='select your type of transaction'
                                        data={[
                                            { label: 'Income(Pemasukan)', value: 'in' },
                                            { label: 'Expense(Pengeluaran)', value: 'out' }
                                        ]}
                                    />
                                </Col>
                            </Row>
                            <Row type='flex' justify='start'>
                                <Col span={8}>
                                    <p className='text-secondary'>
                                        Notes
                                </p>
                                </Col>
                                <Col span={16}>
                                    <AtiTextAreaField
                                        placeholder="write your notes here"
                                    />
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

                        </div>
                    }
                />
                <AtiCard
                    isLoading={false}
                    cardTitle={
                        <Row type='flex' justify='space-between'>
                            <p className='text-secondary'>
                                Daily Table
                            </p>
                            <AtiDatePicker
                                value={Date.now()}
                                dateFormat="DD-MM-YYYY"
                            />
                        </Row>
                        
                    }
                    content={
                        <Row type='flex'>
                            <Table 
                                dataSource={dataSource}
                                columns={columns}
                                style={{width:'100%'}}
                            />
                            
                        </Row>
                    }
                />
            </React.Fragment>
        )
    }
}

export default InputSection