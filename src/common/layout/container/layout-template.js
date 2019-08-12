import React, { Component } from 'react';
import AtiLayout from '../component/layout';
import { connect } from 'react-redux';
import { navigate } from './../../store/action/general-action';
import { selectMenu } from './../store/layout-action';


class LayoutTemplate extends Component {
  
    render() {
      return (
        <React.Fragment>
          <AtiLayout {...this.props} />
        </React.Fragment>
      );
    }
}

const mapStateToProps = state => ({
  ...state.layout, ...state.locale,...state.login
});

const mapDispatchToProps = (dispatch => ({
  navigate,
  selectMenu,
}))();

export default connect(mapStateToProps, mapDispatchToProps)(LayoutTemplate)
