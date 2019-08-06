import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { AtiMultiStep } from 'ati-react-web'
import { Row,Col } from 'antd'

class registerComponent extends Component {
    static propTypes = {
        prop: PropTypes
      }

      render(){
          const { dataSource,currentStep } = this.props
          return(
              <Row type='flex' align='middle' className='register m-5'>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <AtiMultiStep 
                    dataSource={dataSource}
                    currentStep={currentStep}
                  />
                  </Col>
              </Row>
          )
      }
}

export default registerComponent