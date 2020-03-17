import React, { lazy, Suspense, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import dashboardRoutes from '../../routes/dashboardRoutes';
import Header from './Header';
import SideBar from './SideBar';
import { makeStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'

const Dashboard = (props) => {
  const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },

    },
    muiLinearProgress: {
      position: 'fixed',
      width: '100%',
      zIndex: '1080',
    },
    barColorPrimary: {
      backgroundColor: '#b068ff'
    }
  }));

  const LinearDeterminate = () => {
    const classes = useStyles();
    const [completed, setCompleted] = React.useState(0);

    React.useEffect(() => {
      let i = 0;

      function progress () {
        console.log('====', i++)
        setCompleted(oldCompleted => {
          if (oldCompleted === 100) {
            return 0;
          }
          const diff = Math.random() * 10;
          return Math.min(oldCompleted + diff, 100);
        });
      }

      const timer = setInterval(progress, 500);
      return () => {
        clearInterval(timer);
      };
    }, []);

    return (
      <div className={classes.root}>
        <LinearProgress
          variant="determinate"
          classes={{
            determinate: classes.muiLinearProgress,
            barColorPrimary: classes.barColorPrimary
          }}
          value={completed}
          color={'primary'}

        />
        {/*<LinearProgress variant="determinate" value={completed} color="secondary" />*/}
      </div>
    );
  }

  return (
    <React.Fragment>
      <Helmet titleTemplate="%s - S.m.i.l.e" defaultTitle="S.m.i.l.e">
        <meta charSet="utf-8"/>
      </Helmet>
      <div className="container-scroller">
        <Header/>
        {/*partial*/}
        <div className="container-fluid page-body-wrapper">
          <SideBar {...props}/>
          <Suspense fallback={<LinearDeterminate/>}>
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
          </Suspense>
        </div>
      </div>
    </React.Fragment>
  )
}


export default Dashboard;