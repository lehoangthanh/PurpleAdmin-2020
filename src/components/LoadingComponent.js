import React, { Component } from 'react'
import Progress from "react-progress-2";
import { connect } from 'react-redux'

// class Loading extends Component {
//   componentDidMount () {
//     Progress.show();
//   }
//
//   render() {
//     return(
//       <Progress humbStyle={{background: '#b068ff'}}  />
//     )
//   }
// }
//
// const mapStateToProps = state => ({
//   title: state.title
// })
// const mapDispatchToProps = dispatch => ({
//
// })
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Loading)

const LoadingComponent = () => {
  return(
      <Progress thumbStyle={{background: '#b068ff'}}  />
    )
}

export default LoadingComponent;