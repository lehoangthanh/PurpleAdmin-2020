import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomeComponent from '../components/Home';

class HomeContainer extends Component {
 render () {
   this.state = {
     title: 'Home',
   }
   return (
    <HomeComponent
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
)(HomeContainer)