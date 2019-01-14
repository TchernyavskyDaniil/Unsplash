import React, { PureComponent } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

import { Search, SearchButton, SearchField } from '../../UI/Search';
import { colors } from "../../assets/styles/config";
import logoSvg from '../../logo.svg';
import Widgets from "../../Widgets";
import Dotted from "./Dotted";

const NavContainer = styled.nav`
  max-height: 40px;
  width: auto;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const LinkToHome = styled(Link)`
  background-image: url(${logoSvg});
  width: 32px;
  height: 32px;
  cursor: pointer;
  margin-right: 10px;
`;

const Links = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding-left: 10px;
  align-items: center;
`;

const LinkWrapper = styled.li`
  .active {
    opacity: 1;
  }
`;

const LinkNav = styled(NavLink)`
  font-size: 1.4rem;
  font-weight: 500;
  margin: 12px 20px;
  color: ${colors.baseBlack};
  opacity: 0.6;
  cursor: pointer;
  transition: 0.1s ease-out;
  text-decoration: none;
  
  &:hover {
    opacity: 1;
  }
`;

const Submit = styled(Link)`
  font-size: 1.4rem;
  line-height: 2rem;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0,0,0,.04);
  transition: all .2s ease-in-out;
  border: 1px solid ${colors.baseGrayLink};
  color: ${colors.baseGrayLink};
  padding: 5px 8px;
  text-decoration: none;
  margin-right: 12px;
  
  &:hover {
    color: ${colors.baseBlack};
    border-color: ${colors.baseBlack};
  }
`;

const NavText = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 12px; 
`;

const NavTitle = styled.h1`
  font-weight: 700;
  color: ${colors.baseBlack};
  font-size: 1.5rem;
  margin: 0 0 5px 0;
`;

const NavDesc = styled.p`
  font-weight: 500;
  color: ${colors.baseBlack};
  font-size: 1.3rem;
  margin: 0;
`;

class Nav extends PureComponent {
  state = {

  };

  render() {
    return (
      <NavContainer>
        <LinkToHome
          title="Back to Home page Unsplash"
          to="/"
        />
        <NavText>
          <NavTitle>
            Unsplash
          </NavTitle>
          <NavDesc>
            Photos for everyone
          </NavDesc>
        </NavText>
        <Search action="/search">
          <SearchButton title="Search Unsplash demo" />
          <SearchField
            type="text"
            id="search-input"
            placeholder="Search some photos here"
          />
        </Search>
        <Links>
          <LinkWrapper>
            <LinkNav to="/" title="Home page">
              Home
            </LinkNav>
          </LinkWrapper>
          <LinkWrapper>
            <LinkNav to="/collections" title="Collections page">
              Collections
            </LinkNav>
          </LinkWrapper>
          <LinkWrapper>
            <LinkNav to="/explore" title="Explore page">
              Explore
            </LinkNav>
          </LinkWrapper>
        </Links>
        <Dotted />
        <Submit to="/submit">
          Submit a photo
        </Submit>
        <Widgets />
      </NavContainer>
    )
  }
}

export default Nav;
