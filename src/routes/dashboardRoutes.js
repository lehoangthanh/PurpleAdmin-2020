import HomeContainer from '../containers/HomeContainer';
import ButtonContainer from '../containers/UIFeatures/ButtonContainer';
import TypographyContainer from '../containers/UIFeatures/TypographyContainer';
import MdiContainer from '../containers/Icons';
import BasicElementContainer from '../containers/Forms/BasicElementContainer';
import TableContainer from '../containers/Tables/TableContainer';
import Error404Container from '../containers/SamplePages/Error404Container';
import Error500Container from '../containers/SamplePages/Error500Container';

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
    path: "/ui-features",
    name: "Basic UI Elements",
    state: "uiFeatureButton",
    icon: "mdi mdi-crosshairs-gps menu-icon",
    views: [
      {
        path: "/ui-features/buttons",
        name: "Buttons",
        mini: "",
        component: ButtonContainer
      },
      {
        path: "/ui-features/typography",
        name: "Typography",
        mini: "",
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
        name: "Error 404 Page",
        mini: "",
        component: Error404Container
      },
      {
        path: "/sample-pages/error-500",
        name: "Error 500 Page",
        mini: "",
        component: Error500Container
      },
    ]
  },
];
export default dashboardRoutes;