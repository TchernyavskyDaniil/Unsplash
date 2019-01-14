import React, { PureComponent, Fragment } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Header from "./Header";
import MainPage from "./MainPage";

class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          <Switch>
            <Route path="/" component={MainPage} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
