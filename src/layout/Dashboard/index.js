import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import dashboardRoutes from '../../routes/dashboardRoutes';

import Header from './Header';
import SideBar from './SideBar';

class Dashboard extends Component {

  componentDidMount() {

  }

  render() {
    return(
      <div className="container-scroller">
        <Header/>
        {/*partial*/}
        <div className="container-fluid page-body-wrapper">
          <SideBar {...this.props}/>
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
                    <Redirect from={prop.path} to={prop.pathTo} key={key} />
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