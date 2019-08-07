import React, { Component } from 'react';
import AtiLayout from '../component/layout';

class LayoutTemplate extends Component {
  
    render() {
      return (
        <React.Fragment>
          <AtiLayout {...this.props} />
        </React.Fragment>
      );
    }
}

export default LayoutTemplate