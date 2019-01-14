import React, { Fragment, PureComponent } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import SearchPhotos from "../SearchPhotos";
import Photos from "../Photos";

class MainPage extends PureComponent {
  state = {

  };

  render() {
    return (
      <Fragment>
        <SearchPhotos />
        <Photos />
      </Fragment>
    )
  }
}

export default MainPage;
