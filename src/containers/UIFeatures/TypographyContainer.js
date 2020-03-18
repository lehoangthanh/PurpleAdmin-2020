import React, { Component } from 'react';
import { connect } from 'react-redux'
import { TypographyComponent } from '../../components/UIFeatures';

class TypographyContainer extends Component {
  componentDidMount() {
    this.props.completeLoadingBar();
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