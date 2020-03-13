import HomeContainer from '../containers/HomeContainer';
import ButtonContainer from '../containers/UIFeatures/ButtonContainer';
import TypographyContainer from '../containers/UIFeatures/TypographyContainer';

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
];
export default dashboardRoutes;