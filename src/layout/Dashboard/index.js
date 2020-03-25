import React, { Component, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet';
import  _ from 'lodash';
import LoadingBar from 'react-top-loading-bar';
import dashboardRoutes from '../../routes/dashboardRoutes';
import Header from './Header';
import SideBar from './SideBar';
import { initLoadingBar } from '../../actions/loadingBar';
import { toggleMenu } from '../../actions/dashboard';

const Error404Container = React.lazy(() => import("../../containers/SamplePages/Error404Container"));


class Dashboard extends Component {

  constructor () {
    super();
  }

  componentDidMount() {
    if (_.isNil(this.props.LoadingBar))  this.props.initLoadingBar(this.LoadingBar);

  }

  // componentDidUpdate() {
  //   if (_.isNil(this.props.LoadingBar))  this.props.initLoadingBar(this.LoadingBar);
  // }

  // startLoadingBar = () => {
  //   this.LoadingBar.continuousStart()
  // }
  //
  // completeLoadingBar = () => {
  //   this.LoadingBar.complete()
  // }
  // toggleMenu = () => this.props.toggleMenu(this.props.isOpenMenu);

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
            // toggleMenu={this.toggleMenu}
          />
          {/*partial*/}
          <div className="container-fluid page-body-wrapper">
            <SideBar
              {...this.props}
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
                                {...this.props}
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
                            key={key}
                            render={routeProps => (
                              <prop.component
                                {...this.props}
                                {...routeProps}
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
                              {...this.props}
                              {...routeProps}
                            />
                          )}
                        />
                      );
                  }
                })}
                <Route render={routeProps => (
                  <Error404Container
                      {...this.props}
                    {...routeProps}
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
const mapStateToProps = state => {
  return {
    loadingBar: state.loadingBarReducer.loadingBar,
    isOpenMenu: state.dashboardReducer.isOpenMenu
  }
}
const mapDispatchToProps = dispatch => ({
  initLoadingBar: (loadingBar) => dispatch(initLoadingBar(loadingBar)),
  toggleMenu: (isOpenMenu) => dispatch(toggleMenu(isOpenMenu))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
