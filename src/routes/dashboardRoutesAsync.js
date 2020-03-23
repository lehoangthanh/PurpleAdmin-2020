import React from 'react';


const maxTime = 5 * 1000; // 5 second
const getRandomArbitrary = (max) => {
  return Math.random() * (max - 1) + 1;
}

const HomeContainer = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, getRandomArbitrary(maxTime))).then(
    () => import("../containers/HomeContainer")
  );
});

const MdiContainer = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, getRandomArbitrary(maxTime))).then(
    () => import("../containers/Icons")
  );
});

const ButtonContainer = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, getRandomArbitrary(maxTime))).then(
    () => import("../containers/UIFeatures/ButtonContainer")
  );
});

const TypographyContainer = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, getRandomArbitrary(maxTime))).then(
    () => import("../containers/UIFeatures/TypographyContainer")
  );
});

const BasicElementContainer = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, getRandomArbitrary(maxTime))).then(
    () => import("../containers/Forms/BasicElementContainer")
  );
});

const TableContainer = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, getRandomArbitrary(maxTime))).then(
    () => import("../containers/Tables/TableContainer")
  );
});

const Error404Container = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, getRandomArbitrary(maxTime))).then(
    () => import("../containers/SamplePages/Error404Container")
  );
});


const Error500Container = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, getRandomArbitrary(maxTime))).then(
    () => import("../containers/SamplePages/Error500Container")
  );
});

// const HomeContainer = React.lazy(() =>  (import("../containers/HomeContainer")) );

// const MdiContainer = React.lazy(() => import("../containers/Icons"));
//
// const ButtonContainer = React.lazy(() => import("../containers/UIFeatures/ButtonContainer"));
// const TypographyContainer = React.lazy(() => import("../containers/UIFeatures/TypographyContainer"));
//
// const BasicElementContainer = React.lazy(() => import("../containers/Forms/BasicElementContainer"));
//
// const TableContainer = React.lazy(() => import("../containers/Tables/TableContainer"));
//
// const Error404Container = React.lazy(() => import("../containers/SamplePages/Error404Container"));
// const Error500Container = React.lazy(() => import("../containers/SamplePages/Error500Container"));
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