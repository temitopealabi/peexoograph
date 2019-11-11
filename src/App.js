import React, { Component, Suspense } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Header from "./Component/Header/Header.jsx";
import IamPhotographer from "./Component/IamPhotoGrapher/IamPhotoGrapher.jsx";
import NotFound from "./Component/Not-Found/NotFound.jsx";
import Landing from "./Component/Landing/Landing.jsx";
import "./App.css";








class App extends Component {
  render() {
    return (
      <div>
        <Switch>

          <Route path="/not-found" component={NotFound} />
          <Route path="/iamphoto" component={IamPhotographer} />
          <Route path="/" render={props => (<Suspense
            fallback={
              <div>
                <img src="/images/logo.png" alt="loader visual" />
              </div>
            } >
            <Landing {...props} /></Suspense>)}
          />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;
