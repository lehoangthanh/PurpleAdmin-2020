import React, { Component } from 'react';
import { connect } from 'react-redux';
import ButtonComponent from '../../components/UIFeatures/ButtonComponent';

class ButtonContainer extends Component {
  render() {
    return(
      <ButtonComponent
        {...this.props}
      />
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
)(ButtonContainer)