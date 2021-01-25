import React, {useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import {useRoutes} from "./routes";
import {NavBar} from "./components/NavBar";
import {useSelector} from "react-redux";

function App() {

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const routes = useRoutes(isAuthenticated);

  return (
      <BrowserRouter>
          {isAuthenticated && <NavBar />}
          <div className="container">
              {routes}
          </div>
      </BrowserRouter>
  );
}

export default App;
