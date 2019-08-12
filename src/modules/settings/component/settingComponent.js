import React, {Component} from 'react'
import CategorySetting from './categorySetting';
import BalanceSetting from './balanceSetting';
import { Row,Col } from 'antd'
import { AtiTabsGroup, AtiSpinner } from 'ati-react-web'

class SettingComponent extends Component {

    render(){
        const { 
            isLoading,transaction_type,dataTable,
            columnTable,onClickAddCategory,
            modalAddCategory, onClickCancelCategory,
            showError,onSelectTransaction, transaction,
            category,onChangedCategory,onAddCategory,
            modalEditCategory,onCancelEditCategory,onEditCategory,
            editId} = this.props
        console.log(dataTable);
        return(
            <React.Fragment>
                <AtiSpinner
                    size={'large'}
                    tip={'loading'}
                    spinning={isLoading}
                >
                <h3 className='text-secondary'>Setting Pages</h3>
                <Row type='flex' justify='center'>
                    <Col span={24} >
                        <AtiTabsGroup 
                            tabPosition="top"
                            activeKey="tab1"
                            type="card"
                            dataSource={[
                                { 
                                    title: 'Category Setting', key: 'tab1', 
                                    tabContent: 
                                    <CategorySetting 
                                        dataTable={dataTable}
                                        columnTable={columnTable}
                                        transaction_type={transaction_type}
                                        onClickAddCategory={onClickAddCategory}
                                        modalAddCategory={modalAddCategory}
                                        onClickCancelCategory={onClickCancelCategory}
                                        showError={showError}
                                        onSelectTransaction={onSelectTransaction}
                                        transaction={transaction}
                                        category={category}
                                        onChangedCategory={onChangedCategory}
                                        onAddCategory={onAddCategory}
                                        modalEditCategory={modalEditCategory}
                                        onCancelEditCategory={onCancelEditCategory}
                                        onEditCategory={onEditCategory}
                                        editId={editId}
                                        
                                    />
                                },
                                { 
                                    title: 'Balance Setting', key: 'tab2', 
                                    tabContent: <BalanceSetting />
                                },
                            ]}
                        />
                    </Col>
                </Row>
                </AtiSpinner>
            </React.Fragment>
        )
    }
}

export default SettingComponent