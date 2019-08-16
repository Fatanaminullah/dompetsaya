import React, {Component} from 'react'
import CategorySetting from './categorySetting';
import BalanceSetting from './balanceSetting';
import { Row,Col } from 'antd'
import { AtiTabsGroup, AtiSpinner } from 'ati-react-web'

class SettingComponent extends Component {

    render(){
        const { 
            transaction_type,dataTable,initialData,
            onClickAddCategory,onClickCancelCategory,
            onSelectTransaction,onChangedCategory,onAddCategory,
            onCancelEditCategory,onEditCategory,
            onBalanceChanged,onEditBalance,onChangedNotified,
            saveBalance} = this.props
        return(
            <React.Fragment>
                <AtiSpinner
                    size={'large'}
                    tip={'loading'}
                    spinning={initialData.isLoading}
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
                                        initialData={initialData}
                                        dataTable={dataTable}
                                        transaction_type={transaction_type}
                                        onClickAddCategory={onClickAddCategory}
                                        onClickCancelCategory={onClickCancelCategory}
                                        onSelectTransaction={onSelectTransaction}
                                        onChangedCategory={onChangedCategory}
                                        onAddCategory={onAddCategory}
                                        onCancelEditCategory={onCancelEditCategory}
                                        onEditCategory={onEditCategory}
                                    />
                                },
                                { 
                                    title: 'Balance Setting', key: 'tab2', 
                                    tabContent: 
                                    <BalanceSetting 
                                        initialData={initialData}
                                        onBalanceChanged={onBalanceChanged}
                                        onEditBalance={onEditBalance}
                                        onChangedNotified={onChangedNotified}
                                        saveBalance={saveBalance}
                                    />
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