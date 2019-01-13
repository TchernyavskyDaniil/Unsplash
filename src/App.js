import React, { PureComponent, Fragment } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Header from "./Header";

class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
