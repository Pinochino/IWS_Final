import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRouters } from './routers/routers';
import DefaultLayout from './layouts/DefaultLayout';
import "./App.css"
import 'boxicons';
import { useEffect } from 'react';


function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRouters.map((route, index) => {
            let Layout = DefaultLayout; 

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment ;
            }

            const Page = route.component;
            return <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />;
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;