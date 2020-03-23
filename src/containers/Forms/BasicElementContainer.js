import React, { Component } from 'react';
import { BasicElementComponent } from '../../components/Forms';
import { connect } from 'react-redux'

class BasicElementContainer extends Component {
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
      title: 'Basic Element',
    }
    return (
      <BasicElementComponent
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
)(BasicElementContainer)