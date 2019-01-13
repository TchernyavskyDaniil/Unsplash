import React from "react";
import styled from "styled-components";

import { colors } from "../assets/styles/config";
import searchIcon from './searchIcon.svg';

const Search = styled.form`
  height: 40px;
  width: 35%;
  border-radius: 24px;
  background-color: ${colors.baseGray};
  font-size: 1.4rem;
  border: 1px solid transparent;
  transition: all .1s ease-out;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  &:hover {
    border-color: ${colors.hoverGray};
  }
`;

const SearchButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-image: url(${searchIcon});
  height: 100%;
  width: 32px;
  background-color: transparent;
  border: transparent;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0 6px 0 10px;
  margin-left: 5px;
`;

const SearchField = styled.input`
  margin: 0 12px;
  width: 100%;
  background: none;
  border: none;
  color: ${colors.baseBlack};
  height: 20px;
  outline: none;
`;

export default () => (
  <Search action="/search">
    <SearchButton title="Search Unsplash demo" />
    <SearchField
      type="text"
      id="search-input"
      placeholder="Search free high-resolution photos"
    />
  </Search>
)
