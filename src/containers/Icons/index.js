import React, { Component } from 'react';
import { MdiComponent } from '../../components/Icons';
import { connect } from 'react-redux'

class IconsContainer extends Component {
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
      title: 'Icons',
    }
    return (
      <MdiComponent
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
)(IconsContainer)