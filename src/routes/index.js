import React from "react";
import { Redirect } from "react-router-dom";

// Authentication related pages
import Login from "../pages/Auth/Login";
import Dashboard from "../pages/Dashboard/index";
// import Logout from "../pages/Auth/Logout";
// import Register from "../pages/Auth/Register";
// import ForgetPwd from "../pages/Auth/ForgetPassword";

// Dashboard
// import Dashboard from "../pages/Dashboard/index";

// //Pages
// import PagesMaintenance from "../pages/Utility/pages-maintenance";
// import PagesComingsoon from "../pages/Utility/pages-comingsoon";

// import Pages404 from "../pages/Utility/pages-404";
// import Pages500 from "../pages/Utility/pages-500";

const authProtectedRoutes = [
  // { path: "/dashboard", component: Dashboard },
  // { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
];

const publicRoutes = [
  // { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/", component: Dashboard },
  // { path: "/forgot-password", component: ForgetPwd },
  // { path: "/register", component: Register },

  // { path: "/pages-maintenance", component: PagesMaintenance },
  // { path: "/pages-comingsoon", component: PagesComingsoon },
  // { path: "/pages-404", component: Pages404 },
  // { path: "/pages-500", component: Pages500 },
];

export { authProtectedRoutes, publicRoutes };
