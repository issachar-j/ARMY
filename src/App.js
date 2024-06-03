import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "/assets/theme";
import Index from "pages/LandingPages/AboutUs";
import routes from "routes";
import adminrouts from "./adminrouts.js";
import "./main.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase.js";

export default function App() {
  const { pathname } = useLocation(); // Setting page scroll to 0 when changing the route
  const auth_check = getAuth(app);
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth_check, (user) => {
      if (user) {
        const email = user.email;
        const name = user.displayName;
        if (email == "armyadmin_f63x@gmail.com") {
          setAdmin(true);
        } else {
          setAdmin(false);
        }
        console.log("logged in as : ", email, "name is : ", name);
      } else {
        console.log("not logged in");
      }
    });
  }, []);
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);
  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }
      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }
      return null;
    });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(admin ? adminrouts : routes)}
        <Route path={admin ? "ARMY/Admin/home" : "ARMY/home"} element={<Index />} />
        <Route path="*" element={<Navigate to={admin ? "ARMY/Admin/home" : "ARMY/home"} />} />
      </Routes>
    </ThemeProvider>
  );
}
