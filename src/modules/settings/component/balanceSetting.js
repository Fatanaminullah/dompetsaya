import React, { Component } from 'react'
import { AtiTextInputNumeric, AtiButton, AtiList, AtiSwitch } from 'ati-react-web';
import { Row, Slider, Col, Switch } from 'antd';

class BalanceSetting extends Component {

    render() {
        const { initialData,onBalanceChanged,onEditBalance,
                onChangedNotified , saveBalance} = this.props
        return (
            initialData.editBalance ?
            <React.Fragment>
                <div style={{ backgroundColor: '#fff', minHeight: '500px', padding: '15px', borderRadius:'5px'}}>
                    <h5>Set your minimum balance</h5>
                    <Row type='flex' justify='start'>
                            <span> 10,000 </span>
                        <Col span={12}>
                            <Slider
                                onChange={onBalanceChanged}
                                value={initialData.minBalance.length !== 0 ? initialData.minBalance : 0}
                                min={10000}
                                max={10000000}
                            />
                        </Col>
                            <span> 10,000,000 </span>
                        <Col span={4} style={{marginLeft:'15px'}}>
                            <AtiTextInputNumeric 
                                value={initialData.minBalance}
                                disabled={true}
                                thousandSeparator={true}
                                // events={{onValueChange:onBalanceChanged}}
                                />
                        </Col>
                    </Row>
                    <Row type='flex'>
                        <Col span={10}>
                            <h5>Get notified when minimum balance reached</h5>
                        </Col>
                        <Col span={4} align='right'>
                            <Switch 
                                onChange={onChangedNotified}
                                defaultChecked={initialData.notified === 'YES' ? true : false}
                            />
                        </Col>
                    </Row>
                    <Row type='flex' justify='start' style={{marginTop:'30px'}}>
                        <AtiButton 
                            text='Cancel'
                            className='btn btn-outline-danger'
                            events={{onClick:onEditBalance}}
                        />
                        <AtiButton 
                            text='Save'
                            className='btn btn-outline-success'
                            events={{onClick:saveBalance}}
                        />
                    </Row>
                </div>
            </React.Fragment>
            : <React.Fragment>
                <div style={{padding:'15px',backgroundColor:'#fff',borderRadius:'5px', minHeight:'500px'}}>
                    <Row type='flex'>
                        <Col span={24}>
                            <AtiList 
                                size='large'
                                dataSource={[
                                    {title:'Your Minimum Balance',description:initialData.minBalance.toLocaleString()},
                                    {title:'Get Notified when minimum balance reached', description:initialData.notified}
                                ]}
                            />
                        </Col>
                    </Row>
                    <Row type='flex' style={{marginTop:'10px'}}>
                        <Col span={24}>
                            <AtiButton 
                                text='Edit'
                                className='btn btn-outline-primary'
                                events={{onClick:onEditBalance}}
                            />
                        </Col>
                    </Row>
                    
                </div>
            </React.Fragment>
        )
    }
}

export default BalanceSetting