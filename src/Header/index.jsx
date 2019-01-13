import React, { PureComponent } from "react";
import styled from "styled-components";
import Nav from "./Nav";

const HeaderContainer = styled.header`
  
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
