import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListComponent } from '../../components/Devices';
// import { fetchList } from '../../actions/Devices';



class ListContainer extends Component {

  constructor () {
    super();
  }

   componentDidMount() {
     this.props.loadingBar.complete();
    // const { fetchDeviceList } = this.props;
    //  fetchDeviceList();
  }

  componentDidUpdate() {
    this.props.loadingBar.complete();
  }

  render () {
    return (
      <ListComponent
        {...this.props}
      />
    )
  }
}

const mapStateToProps = state => {
  console.log('===mapStateToProps==', state)
  return {
    // devices: state.DeviceReducer.devices
  }
}
const mapDispatchToProps = dispatch => ({
  // fetchDeviceList: () => dispatch(fetchList())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer)