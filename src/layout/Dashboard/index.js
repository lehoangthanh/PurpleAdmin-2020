// import React, { Component } from 'react'
import React, { Component, Suspense, useState, useTransition } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import LoadingBar from 'react-top-loading-bar';
import dashboardRoutes from '../../routes/dashboardRoutes';
import Header from './Header';
import SideBar from './SideBar';
import { connect } from 'react-redux'

class Dashboard extends Component {
// const Dashboard = (props) => {
  constructor () {
    super();
  }
  startLoadingBar = () => {
    this.LoadingBar.continuousStart()
  }

  completeLoadingBar = () => {
    this.LoadingBar.complete()
  }

  render () {
    return (
      <React.Fragment>
        <Helmet titleTemplate="%s - S.m.i.l.e" defaultTitle="S.m.i.l.e">
          <meta charSet="utf-8"/>
        </Helmet>
        <div className="container-scroller">
          <LoadingBar onRef={ref => {
            this.LoadingBar = ref;
            this.LoadingBar.continuousStart(20)
            // setTimeout(()=> { this.LoadingBar.complete()},3000)
          }} />

          <Header/>
          {/*partial*/}
          <div className="container-fluid page-body-wrapper">
            <SideBar {...this.props}/>
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
                                handleClick={this.startLoadingBar}
                                startFetch={this.startLoadingBar}
                                completeLoadingBar={this.completeLoadingBar}
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
                              handleClick={this.startLoadingBar}
                              startFetch={this.startLoadingBar}
                              completeLoadingBar={this.completeLoadingBar}
                            />
                          )}
                        />
                      );
                  }
                })}
              </Switch>
            </div>
            </Suspense>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Dashboard
