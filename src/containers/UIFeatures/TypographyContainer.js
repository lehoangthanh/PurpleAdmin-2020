import React, { Component } from 'react';
import { connect } from 'react-redux'
import TypographyComponent from '../../components/UIFeatures/TypographyComponent';

class TypographyContainer extends Component {

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