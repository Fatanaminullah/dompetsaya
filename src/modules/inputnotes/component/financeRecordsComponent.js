import React, { Component } from 'react'
import PropTypes from 'prop-types';
import InputSection from './inputSection'
import { Row, Col } from 'antd';
import { AtiTabsGroup } from 'ati-react-web';
import TableSection from './tableSection';

class FinanceRecordsComponent extends Component {

    static propTypes ={
        prop:PropTypes
    }

    render(){
        const { onDateChanged,onDateInputChanged,
                transactionType,initialData,validation,
                onValueChanges,resetFilter,categoryType,
                onSelectCategory,onValueChangesTable,
                onSelectCategoryTable} = this.props
        
        return(
            <React.Fragment>
                <h3 className='text-secondary'>Financial Records</h3>
                <Row type='flex' justify='center'>
                    <Col span={24} >
                        <AtiTabsGroup 
                            tabPosition="top"
                            activeKey="tab1"
                            type="card"
                            dataSource={[
                                { 
                                    title: 'Input', key: 'tab1', 
                                    tabContent: 
                                    <InputSection 
                                        initialData={initialData}
                                        onDateChanged={onDateChanged}
                                        onDateInputChanged={onDateInputChanged}
                                        transactionType={transactionType}
                                        validation={validation}
                                        onValueChanges={onValueChanges}
                                        onValueChangesTable={onValueChangesTable}
                                        resetFilter={resetFilter}
                                        categoryType={categoryType}
                                        onSelectCategory={onSelectCategory}
                                        onSelectCategoryTable={onSelectCategoryTable}
                                    /> 
                                },
                                { 
                                    title: 'Finance Table', key: 'tab2', 
                                    tabContent: <TableSection />
                                },
                            ]}
                        />  
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default FinanceRecordsComponent