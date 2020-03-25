import React from 'react';


const HomeContainer = React.lazy(() =>  (import("../containers/HomeContainer")) );

const MdiContainer = React.lazy(() => import("../containers/Icons"));

const ButtonContainer = React.lazy(() => import("../containers/UIFeatures/ButtonContainer"));
const TypographyContainer = React.lazy(() => import("../containers/UIFeatures/TypographyContainer"));

const BasicElementContainer = React.lazy(() => import("../containers/Forms/BasicElementContainer"));

const TableContainer = React.lazy(() => import("../containers/Tables/TableContainer"));

const DeviceListContainer = React.lazy(() => import("../containers/Devices/List"));

const Error404Container = React.lazy(() => import("../containers/SamplePages/Error404Container"));
const Error500Container = React.lazy(() => import("../containers/SamplePages/Error500Container"));

import { Devices as DevicesIcon
  , List as ListIcon
  , Save as SaveIcon
} from '@material-ui/icons';

const dashboardRoutes = [
  {
    path: "/",
    exact: true,
    name: "Dashboard",
    icon: "mdi mdi-home menu-icon",
    component: HomeContainer
  },
  {
    path: "/dashboard",
    code: "dashboard",
    exact: true,
    name: "Dashboard",
    icon: "mdi mdi-home menu-icon",
    component: HomeContainer
  },
  {
    collapse: true,
    path: "/devices",
    code: "devices_management",
    name: "Devices Management",
    state: "devicesManagement",
    icon: <DevicesIcon/>,
    views: [
      {
        path: "/devices/list",
        exact: true,
        code: 'devices_list',
        name: "List",
        icon: <ListIcon/>,
        component: DeviceListContainer
      },
      {
        path: "/devices/forms",
        exact: true,
        code: 'devices_save',
        name: "Add",
        icon: <SaveIcon/>,
        component: TypographyContainer
      },
    ]
  },
  {
    collapse: true,
    path: "/ui-features",
    name: "Basic UI Elements",
    state: "uiFeatureButton",
    icon: "mdi mdi-crosshairs-gps menu-icon",
    views: [
      {
        path: "/ui-features/buttons",
        exact: true,
        name: "Buttons",
        icon: "mdi menu-icon",
        component: ButtonContainer
      },
      {
        path: "/ui-features/typography",
        exact: true,
        name: "Typography",
        icon: "mdi menu-icon",
        component: TypographyContainer
      },
    ]
  },
  {
    path: "/icons",
    exact: true,
    name: "Icons",
    icon: "mdi mdi-contacts menu-icon",
    component: MdiContainer
  },
  {
    path: "/forms",
    exact: true,
    name: "Forms",
    icon: "mdi mdi-format-list-bulleted menu-icon",
    component: BasicElementContainer
  },
  {
    path: "/tables",
    exact: true,
    name: "Tables",
    icon: "mdi mdi-table-large menu-icon",
    component: TableContainer
  },
  {
    collapse: true,
    path: "/sample-pages",
    name: "Sample Pages",
    state: "samplePage",
    icon: "mdi mdi-medical-bag menu-icon",
    views: [
      {
        path: "/sample-pages/error-404",
        exact: true,
        name: "Error 404 Page",
        code: "error404_page",
        icon: "mdi menu-icon",
        component: Error404Container
      },
      {
        path: "/sample-pages/error-500",
        exact: true,
        name: "Error 500 Page",
        icon: "mdi menu-icon",
        component: Error500Container
      },
    ]
  },
];
export default dashboardRoutes;