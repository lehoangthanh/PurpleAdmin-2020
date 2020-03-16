import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Error404Component } from '../../components/SamplePages';

class Error404Container extends Component {
  render () {
    this.state = {
      title: 'Home',
    }
    return (
      <Error404Component
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
)(Error404Container)