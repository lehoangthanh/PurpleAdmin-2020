import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Error500Component } from '../../components/SamplePages';

class Error500Container extends Component {
  constructor () {
    super();
  }

  componentDidMount() {
    this.props.loadingBar.complete();
  }

  componentDidUpdate() {
    this.props.loadingBar.complete();
  }

  render () {
    this.state = {
      title: 'Home',
    }
    return (
      <Error500Component
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
)(Error500Container)