import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadingComponent from '../../components/Utils/LoadingComponent';

class LoadingContainer extends Component {
  constructor () {
    super();
    this.state = {
      completed: 20
    }
  }
  componentDidMount () {
    this.setState({completed: 100});
    console.log('componentDidMount', this.state)

  }

  // componentWillUnmount () {
  //
  //   console.log('componentWillUnmount',this.state)
  // }



  render () {
    return (
      <LoadingComponent
        {...this.props}


      />
    )
  }
}

const mapStateToProps = state => ({
  completed: state.completed
})
const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadingContainer)