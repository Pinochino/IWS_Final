import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import GlobalStyles from "./GlobalStyles";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import AuthProvider from "./AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <Provider store={store}>
     <AuthProvider>
     <GlobalStyles>
          <App />
      </GlobalStyles>
     </AuthProvider>
   </Provider>
  </React.StrictMode>
);
