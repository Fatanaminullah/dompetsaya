import React, { Component } from 'react'
import PropTypes from 'prop-types';
import InputSection from './inputSection'
import { Row, Col } from 'antd';
import { AtiTabsGroup } from 'ati-react-web';
import TableSection from './tableSection';

class FinanceRecordsComponent extends Component {

    static propTypes = {
        prop: PropTypes
    }

    render() {
        const { onDateChanged, onDateInputChanged,
            transactionType, initialData, validation,
            onValueChanges, resetFilter, categoryType,
            onSelectCategory, onValueChangesTable,
            onSelectCategoryTable, onChangeMinValue,
            onChangeMaxValue, onChangeAmount, onInputData } = this.props

        return (
            <React.Fragment>
                <h3 className='text-secondary'>Financial Records</h3>
                <Row type='flex' justify='center'>
                    <Col span={24} >
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
                            onChangeMaxValue={onChangeMaxValue}
                            onChangeMinValue={onChangeMinValue}
                            onChangeAmount={onChangeAmount}
                            onInputData={onInputData}
                        />
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default FinanceRecordsComponent