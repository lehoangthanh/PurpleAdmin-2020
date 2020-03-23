import React, { useState, useEffect } from 'react';
import { Collapse } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { Link, useRouteMatch, useLocation }from "react-router-dom";
import _ from 'lodash';
import dashboardRoutes from '../../routes/dashboardRoutes';
import { Helmet } from 'react-helmet';


const setRouteStateActive = (route) => {
  const [routeActive, setRouteActive] = useState({});
  if (isActive(route) && _.isEmpty(routeActive)) {
    setRouteActive(route);
  }
}

const isActive = (route) => {
  const location = new useLocation();
  const boolIsActive = !_.isNil(useRouteMatch(route.path)) || (location.pathname === '/' && route.path === '/dashboard');
  return boolIsActive;
}

const classActive = (route) => {
  return isActive(route) ? 'active' : '';
}
const RouteEle = (props) => {
  const [loadingBar, setLoadingBar] = useState(null)
  const { route } = props;
  if (!_.isNil(route.collapse) || route.collapse === true) return false;

  setRouteStateActive(route);

  const handleClick = () => {
    loadingBar.continuousStart(10)
  }
  useEffect(() => {
    setLoadingBar(props.loadingBar);
  })

  const _classActive = classActive(route);
  return(
    <React.Fragment>
      <RenderTitle route={route}/>
      <li className={"nav-item " + _classActive} >
        <Link className="nav-link" to={route.path} onClick={handleClick}>
          <span className="menu-title">{route.name}</span>
          <i className={route.icon}></i>
        </Link>
      </li>
    </React.Fragment>
  );
}

const RouteCollapse = (props) => {
  const { route } = props;
  if (_.isNil(route.collapse)) return false;
  const [isOpen, setOpen] = useState(false);
  const _classActive = classActive(route);
  return (
    <li className={"nav-item " + _classActive}>
      <Link className="nav-link"
        to={"#"}
         aria-controls="ui-basic"
         onClick={(e) =>
         {
           setOpen(!isOpen);
           e.preventDefault();

         }}>
        <span className="menu-title">{route.name}</span>
        { isOpen ? <ExpandLess/> : <ExpandMore/> }
        <i className={route.icon} />
      </Link>
      <Collapse className="" in={isOpen}>
        <ul className="nav flex-column sub-menu">
          {
            route.views.map((subRoute, index) => {
              return(
               <RouteEle {...props} route={subRoute} key={"sub-route_"+index}/>
              )
            })
          }
        </ul>
      </Collapse>
    </li>
  );
}

const RenderTitle = (props) => {
  const { route } = props;
  if (!isActive(route)) return ' ';

  return (
    <Helmet>
      <title>{props.title || route.title || route.name}</title>
    </Helmet>)

}

const SideBar = (props) => {
  return (
    <React.Fragment>
      {/*partial:partials/_sidebar.html*/}
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item nav-profile">
            <Link to="/dashboard" className="nav-link">
              <div className="nav-profile-image">
                <img src="/assets/images/faces/baby-smiling-boy-96x77.png" alt="profile"/>
                <span className="login-status online"/>
                {/*change to offline or busy as needed*/}
              </div>
              <div className="nav-profile-text d-flex flex-column">
                <span className="font-weight-bold mb-2">David Grey. H</span>
                <span className="text-secondary text-small">Project Manager</span>
              </div>
              <i className="mdi mdi-bookmark-check text-success nav-profile-badge"/>
            </Link>
          </li>
          {
            dashboardRoutes.map((route, key) => {
              if(route.path === '/') return false
              const st = {};
              const collapse = _.get(route, 'collapse', false);
              if(collapse) {
                return <RouteCollapse {...props} route={route} key={"route_" + key} />;
              } else {
                return <RouteEle {...props} route={route} key={"route_" + key}/>;
              }
            })
          }
          {/*<li className={"nav-item "}>*/}
          {/*  <Link className="nav-link" to="/home">*/}
          {/*    <span className="menu-title">Dashboard</span>*/}
          {/*    <i className="mdi mdi-home menu-icon"></i>*/}
          {/*  </Link>*/}
          {/*</li>*/}
          {/*<li className={"nav-item "}>*/}
          {/*  <a className="nav-link" href="#"*/}
          {/*     aria-controls="ui-basic"*/}
          {/*     onClick={handleClick}*/}
          {/*  >*/}
          {/*    <span className="menu-title">Basic UI Elements</span>*/}
          {/*    /!*<i className="menu-arrow"></i>*!/*/}
          {/*    {open ? <ExpandLess /> : <ExpandMore />}*/}
          {/*    <i className="mdi mdi-crosshairs-gps menu-icon"></i>*/}
          {/*  </a>*/}

            {/*<Collapse className="" in={open}>*/}
            {/*  <ul className="nav flex-column sub-menu">*/}
            {/*    <li className="nav-item"><Link className="nav-link" to="/ui-features/buttons">Buttons</Link>*/}
            {/*    </li>*/}
            {/*    <li className="nav-item">*/}
            {/*      <a className="nav-link" href="#">Typography</a></li>*/}
            {/*  </ul>*/}
            {/*</Collapse>*/}
          {/*</li>*/}
          {/*<li className="nav-item">*/}
          {/*  <a className="nav-link" href="#">*/}
          {/*    <span className="menu-title">Icons</span>*/}
          {/*    <i className="mdi mdi-contacts menu-icon"></i>*/}
          {/*  </a>*/}
          {/*</li>*/}
          {/*<li className="nav-item">*/}
          {/*  <a className="nav-link" href="#">*/}
          {/*    <span className="menu-title">Forms</span>*/}
          {/*    <i className="mdi mdi-format-list-bulleted menu-icon"></i>*/}
          {/*  </a>*/}
          {/*</li>*/}
          {/*<li className="nav-item">*/}
          {/*  <a className="nav-link" href="#">*/}
          {/*    <span className="menu-title">Charts</span>*/}
          {/*    <i className="mdi mdi-chart-bar menu-icon"></i>*/}
          {/*  </a>*/}
          {/*</li>*/}
          {/*<li className="nav-item">*/}
          {/*  <a className="nav-link" href="#">*/}
          {/*    <span className="menu-title">Tables</span>*/}
          {/*    <i className="mdi mdi-table-large menu-icon"></i>*/}
          {/*  </a>*/}
          {/*</li>*/}
          {/*<li className="nav-item">*/}
          {/*  <a className="nav-link" data-toggle="collapse" href="#" aria-expanded="false"*/}
          {/*     aria-controls="general-pages">*/}
          {/*    <span className="menu-title">Sample Pages</span>*/}
          {/*    <i className="menu-arrow"></i>*/}
          {/*    <i className="mdi mdi-medical-bag menu-icon"></i>*/}
          {/*  </a>*/}
          {/*  <div className="collapse" id="general-pages">*/}
          {/*    <ul className="nav flex-column sub-menu">*/}
          {/*      <li className="nav-item"><a className="nav-link" href="#"> Blank*/}
          {/*        Page </a></li>*/}
          {/*      <li className="nav-item"><a className="nav-link" href="pages/samples/login.html"> Login </a></li>*/}
          {/*      <li className="nav-item"><a className="nav-link" href="pages/samples/register.html"> Register </a>*/}
          {/*      </li>*/}
          {/*      <li className="nav-item"><a className="nav-link" href="pages/samples/error-404.html"> 404 </a>*/}
          {/*      </li>*/}
          {/*      <li className="nav-item"><a className="nav-link" href="pages/samples/error-500.html"> 500 </a>*/}
          {/*      </li>*/}
          {/*    </ul>*/}
          {/*  </div>*/}
          {/*</li>*/}
          {/*<li className="nav-item sidebar-actions">*/}
          {/*      <span className="nav-link">*/}
          {/*        <div className="border-bottom">*/}
          {/*          <h6 className="font-weight-normal mb-3">Projects</h6>*/}
          {/*        </div>*/}
          {/*        <button className="btn btn-block btn-lg btn-gradient-primary mt-4">+ Add a project</button>*/}
          {/*        <div className="mt-4">*/}
          {/*          <div className="border-bottom">*/}
          {/*            <p className="text-secondary">Categories</p>*/}
          {/*          </div>*/}
          {/*          <ul className="gradient-bullet-list mt-4">*/}
          {/*            <li>Free</li>*/}
          {/*            <li>Pro</li>*/}
          {/*          </ul>*/}
          {/*        </div>*/}
          {/*      </span>*/}
          {/*</li>*/}
        </ul>
      </nav>
    </React.Fragment>
  )
}

export default SideBar;
