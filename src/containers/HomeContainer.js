import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomeComponent from '../components/Home';

class HomeContainer extends Component {
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

   }
   return (
    <HomeComponent
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
)(HomeContainer)