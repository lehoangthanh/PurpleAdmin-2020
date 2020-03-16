import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import dashboardRoutes from '../../routes/dashboardRoutes';

import Header from './Header';
import SideBar from './SideBar';

class Dashboard extends Component {

  componentDidMount () {

  }

  render () {
    return (
      <React.Fragment>
        <Helmet titleTemplate="%s - S.m.i.l.e" defaultTitle="S.m.i.l.e">
          <meta charSet="utf-8" />
        </Helmet>
        <div className="container-scroller">
          <Header/>
          {/*partial*/}
          <div className="container-fluid page-body-wrapper">
            <SideBar {...this.props}/>
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
                            component={prop.component}
                            key={key}
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
                          component={prop.component}
                          key={key}
                        />
                      );
                  }
                })}
              </Switch>
            </div>
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