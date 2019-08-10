import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getData } from '../../modules/inputnotes/store/notes-action'
import FinanceRecordsComponent from '../../modules/inputnotes/component/financeRecordsComponent'

class FinanceRecordsPage extends Component {

    componentDidMount(){
        this.props.getData(1)
        
    }
    render(){
        return(
            <FinanceRecordsComponent />
        )
    }
}

const mapStateToProps = state => ({
    ...state.notes
  });

const mapDispatchToProps = (dispatch => ({
    getData
  }))();



export default connect(mapStateToProps,mapDispatchToProps)(FinanceRecordsPage)