import React, { PureComponent } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import SearchPhotos from "../SearchPhotos";

class MainPage extends PureComponent {
  state = {

  };

  render() {
    return (
      <SearchPhotos />
    )
  }
}

export default MainPage;
