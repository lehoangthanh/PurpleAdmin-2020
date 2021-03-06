import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonComponent } from '../../components/UIFeatures';

class ButtonContainer extends Component {
  constructor () {
    super();
  }

  componentDidMount() {
    this.props.loadingBar.complete();
  }

  componentDidUpdate() {
    this.props.loadingBar.complete();
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