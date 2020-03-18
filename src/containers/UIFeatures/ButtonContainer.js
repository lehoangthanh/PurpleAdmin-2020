import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonComponent } from '../../components/UIFeatures';

class ButtonContainer extends Component {
  componentDidMount() {
    this.props.completeLoadingBar();
  }
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