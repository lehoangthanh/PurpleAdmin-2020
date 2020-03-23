import React, { Component } from 'react';
import { connect } from 'react-redux'
import { TypographyComponent } from '../../components/UIFeatures';

class TypographyContainer extends Component {
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
    return(
      <TypographyComponent {...this.props} />
    )
  }
}

const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TypographyContainer)