import React, { PureComponent } from "react";
import styled from "styled-components";
import Nav from "./Nav";
import { colors } from "../assets/styles/config";

const HeaderContainer = styled.header`
  position: fixed;
  z-index: 1000;
  background-color: ${colors.baseWhite};
  width: 100%;
  border-bottom: 1px solid ${colors.baseGray};
`;

class Header extends PureComponent {
  state = {

  };

  render() {
    return (
      <HeaderContainer>
        <Nav />
      </HeaderContainer>
    )
  }
}

export default Header;
