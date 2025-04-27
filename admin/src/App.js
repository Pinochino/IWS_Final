import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import classNames from "classnames/bind";
import styles from "./index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./Routes";
import { Fragment } from "react";
import { DefaultLayout } from "./Layouts";
import PrivateRoute from "./Layouts/DefaultLayout/PrivateRoute";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

function App() {
  const [theme, colorMode] = useMode();
  const {user} = useSelector((state) => state.user);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div className={cx("App")}>
            <main className={cx("content")}>
              <Routes>
                {/* Public Routes */}
                {publicRoutes.map((route, index) => {
                  let Layout = route.layout === null ? Fragment : DefaultLayout;
                  const Page = route.component;

                  return (
                    <Route
                      key={index}
                      path={route.path}
                      element={
                        <Layout>
                          <Page />
                        </Layout>
                      }
                    />
                  );
                })}

                {/* Private Routes */}
                {privateRoutes.map((route, index) => {
                  const Layout = route.layout === null ? Fragment : DefaultLayout;
                  const Page = route.component;

                  return (
                    <Route
                      key={index}
                      path={route.path}
                      element={
                        <PrivateRoute>
                          <Layout>
                            <Page />
                          </Layout>
                        </PrivateRoute>
                      }
                    />
                  );
                })}
              </Routes>
            </main>
          </div>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
