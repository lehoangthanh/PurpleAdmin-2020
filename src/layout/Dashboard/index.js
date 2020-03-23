import React, { Component, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import  _ from 'lodash';
import LoadingBar from 'react-top-loading-bar';
import dashboardRoutes from '../../routes/dashboardRoutes';
import Header from './Header';
import SideBar from './SideBar';
import { connect } from 'react-redux'
const Error404Container = React.lazy(() => import("../../containers/SamplePages/Error404Container"));

class Dashboard extends Component {

  constructor () {
    super();
    this.state = {
      loadingBar: null,
      isOpenMenu: false
    }
  }

  componentDidMount() {
    if(_.isNull(this.state.loadingBar)){
      this.setState({loadingBar: this.LoadingBar})
    }
  }

  // startLoadingBar = () => {
  //   this.LoadingBar.continuousStart()
  // }
  //
  // completeLoadingBar = () => {
  //   this.LoadingBar.complete()
  // }
  toggleMenu = () => {
    this.setState({isOpenMenu: !this.state.isOpenMenu})
  }
  render () {

    // const SampleRoutes = dashboardRoutes.find( r => (!_.isNil(r.state) && r.state === 'samplePage'));
    // const Error404Route = SampleRoutes.views.find(s => (!_.isNil(s.code) && s.code === 'error404_page'));
    return (
      <React.Fragment>
        <Helmet titleTemplate="%s - S.m.i.l.e" defaultTitle="S.m.i.l.e">
          <meta charSet="utf-8"/>
        </Helmet>
        <div className="container-scroller">
          <LoadingBar
            color='#b068ff'
            onRef={ref => {
            this.LoadingBar = ref;
            // setTimeout(()=> { this.LoadingBar.complete()},3000)
          }} />

          <Header
            {...this.props}
            {...this.state}
            toggleMenu={this.toggleMenu}
          />
          {/*partial*/}
          <div className="container-fluid page-body-wrapper">
            <SideBar
              {...this.props}
              {...this.state}
              loadingBar={this.state.loadingBar}
              toggleMenu={this.toggleMenu}
            />
            <Suspense fallback={<div></div>}>
            <div className="main-panel">
              <Switch>
                {dashboardRoutes.map((prop, key) => {
                  if (prop.collapse) {
                    return prop.views.map((prop, key) => {
                      if (prop.name === "Notifications") {
                        return (
                          <Route
                            path={prop.path}
                            key={key}
                            render={routeProps => (
                              <prop.component
                                {...routeProps}
                                handleClick={this.handleNotificationClick}
                              />
                            )}
                          />
                        );
                      } else {
                        return (
                          <Route
                            path={prop.path}
                            // component={prop.component}
                            key={key}
                            render={routeProps => (
                              <prop.component
                                {...routeProps}
                                loadingBar={this.state.loadingBar}
                              />
                            )}
                          />
                        );
                      }
                    });
                  } else {
                    if (prop.redirect)
                      return (
                        <Redirect from={prop.path} to={prop.pathTo} key={key}/>
                      );
                    else
                      return (
                        <Route
                          exact={prop.exact}
                          path={prop.path}
                          // component={prop.component}
                          key={key}
                          render={routeProps => (
                            <prop.component
                              {...routeProps}
                              loadingBar={this.state.loadingBar}
                            />
                          )}
                        />
                      );
                  }
                })}
                <Route render={routeProps => (
                  <Error404Container
                    {...routeProps}
                    loadingBar={this.state.loadingBar}
                  />
                )}/>
              </Switch>
            </div>
            </Suspense>
          </div>
        </div>
      </React.Fragment>
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
)(Dashboard)
