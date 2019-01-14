import React from "react";
import styled from "styled-components";
import styledMap from 'styled-map';

import { colors } from "../assets/styles/config";
import searchIcon from './searchIcon.svg';

export const Search = styled.form`
  height: 40px;
  width: ${styledMap({
    default: '35%',
    maxWidth: '100%',
    halfWidth: '50%',
    homeWidth: '60%',
  })};
  border-radius: ${styledMap({
    easyBorder: '4px',
    default: '24px',
  })};
  background-color: ${styledMap({
    easyGray: `${colors.lightGray}`,
    default: `${colors.baseGray}`
  })};
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

export const SearchButton = styled.button`
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

export const SearchField = styled.input`
  margin: 0 12px;
  width: 100%;
  background: none;
  border: none;
  color: ${colors.baseBlack};
  height: 20px;
  outline: none;
`;
