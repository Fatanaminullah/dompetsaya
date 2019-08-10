import React , { Component } from 'react'
import { Table, Row } from 'antd';

class TableSection extends Component {
    render(){
        const dataSource = [
            {
              key: '1',
              income: 500000,
              expenditure: 35000,
              differences: 465000,
              date:'08-10-2019',
              yourbalance:465000

            },
          ];
          
          const columns = [
            {
              title: 'Income',
              dataIndex: 'income',
              key: 'income',
              sorter: (a, b) => a.income - b.income
            },
            {
              title: 'Expenditure',
              dataIndex: 'expenditure',
              key: 'expenditure',
              sorter: (a, b) => a.expenditure - b.expenditure
            },
            {
              title: 'Differences',
              dataIndex: 'differences',
              key: 'differences',
              sorter: (a, b) => a.differences - b.differences
            },
            {
              title: 'Date',
              dataIndex: 'date',
              key: 'date',
              sorter: (a, b) => a.date - b.date
            },
            {
              title: 'Your Balance',
              dataIndex: 'yourbalance',
              key: 'yourbalance',
              sorter: (a, b) => a.yourbalance - b.yourbalance
            }
          ];
        return(
            <React.Fragment>
                <Row type='flex' style={{backgroundColor:'#fff'}}>
                <Table 
                    dataSource={dataSource}
                    columns={columns}
                    style={{width:'100%'}}
                />
                </Row>
            </React.Fragment>
        )
    }
}

export default TableSection