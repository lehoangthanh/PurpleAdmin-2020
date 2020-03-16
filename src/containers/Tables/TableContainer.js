import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BasicTableComponent } from '../../components/Tables';

class TableContainer extends Component {
  render () {
    this.state = {
      title: 'Home',
    }
    return (
      <BasicTableComponent
        {...this.props}

      />
    )
  }
}

const mapStateToProps = state => ({
  title: state.title
})
const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableContainer)