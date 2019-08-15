import React , { Component } from 'react'
import { Table, Row } from 'antd';
import { AtiTable, AtiTableForm } from 'ati-react-web';

class TableSection extends Component {
    render(){
        const dataSource = [
            {
              key: '1',
              income: 500000,
              expenditure: 35000,
              differences: 465000,
              date:'08-10-2019'
            },
          ];
          
          const columns = [
            {
              title: 'Date',
              dataIndex: 'date',
              key: 'date',
              sorter: (a, b) => a.date - b.date
            },
            {
              title: 'Income',
              dataIndex: 'income',
              key: 'income',
              sorter: (a, b) => a.income - b.income
            },
            {
              title: 'Spending',
              dataIndex: 'expenditure',
              key: 'expenditure',
              sorter: (a, b) => a.expenditure - b.expenditure
            },
            {
              title: 'Differences',
              dataIndex: 'differences',
              key: 'differences',
              sorter: (a, b) => a.differences - b.differences
            }
          ];
        return(
            <React.Fragment>
                <Row type='flex' style={{backgroundColor:'#fff'}}>
                <AtiTable
                    showHeader={true} 
                    dataSource={dataSource}
                    columns={columns}
                    style={{width:'100%'}}
                    events={
                      {
                          onChange: () => {},
                          onHeaderRow: (column, index) => {},
                          onExpandedRowsChange: (expandedRows) => {},
                      }
                  }
                />
                </Row>
            </React.Fragment>
        )
    }
}

export default TableSection