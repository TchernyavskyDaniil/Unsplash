import React, { PureComponent, Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../../assets/styles/config";
import dottedIcon from './icons/dottedIcon.svg'
import Socials from "../../../Socials";

const DottedButton = styled.button`
  background-image: url(${dottedIcon});
  height: 5px;
  width: 22px;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border: transparent;
  padding: 10px 0;
  cursor: pointer;
  opacity: 0.6;
  transition: all 0.1s ease-out;

  &:hover {
    opacity: 1;
  }
`;

const Links = styled.ul`
  list-style: none;
  padding: 12px;
  margin: 0;
  height: 90%;
  display: flex;
  flex-direction: column;
`;

const DottedLinkContainer = styled.li`
  padding: 8px 0;
`;

const DottedLink = styled(Link)`
  color: ${colors.baseWhite};
  text-decoration: none;
  font-size: 1.4rem;
  min-width: 130px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: 0.1s ease-out;
  
  &:hover {
    opacity: 0.7;
  }
`;

const DottedHref = styled.a`
  color: ${colors.baseWhite};
  text-decoration: none;
  font-size: 1.4rem;
  min-width: 130px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: 0.1s ease-out;
  
  &:hover {
    opacity: 0.7;
  }
`;

const DottedContainer = styled.div`
  transform: scale(1) translate(0);
  pointer-events: auto;
  margin-left: 4px;
  margin-right: 25px;
  width: 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  transition: 0.1s ease-out;
`;

const DottedPopup = styled.div`
  position: absolute;
  background-color: ${colors.baseBlack};
  top: 35px;
  left: 4px;
  
  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    right: 100%;
    bottom: 100%;
    margin-right: -20px;
    border-top-width: 0;
    border-bottom-color: ${colors.baseBlack};
  }
`;

class Dotted extends PureComponent {
  state = {
    dotted: [
      {
        value: 1,
        label: 'Community',
        url: 'https://medium.com/unsplash?utm_source=unsplash&utm_medium=referral',
      },
      {
        value: 2,
        label: 'Store',
        url: 'https://store.unsplash.com/?utm_source=unsplash&utm_medium=referral',
      },
      {
        value: 3,
        label: 'History',
        url: '/history',
      },
      {
        value: 4,
        label: 'Made with Unsplash',
        url: 'https://madewith.unsplash.com/?utm_source=unsplash&utm_medium=referral',
      },
      {
        value: 5,
        label: 'API/Developers',
        url: 'https://unsplash.com/developers',
      },
      {
        value: 6,
        label: 'Hiring',
        url: '/hiring',
      },
      {
        value: 7,
        label: 'License',
        url: '/license',
      },
      {
        value: 8,
        label: 'Help',
        url: 'https://medium.com/unsplash/unsplash-help-1533fc0e9349?utm_source=unsplash&utm_medium=referral',
      },
    ],
    isOpen: false,
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = event => {
    if (this.dottedRef && !this.dottedRef.contains(event.target)) {
      this.setState({ isOpen: false });
    }
  };

  setDottedRef = node => {
    this.dottedRef = node;
  };

  openDottedMenu = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

  render() {
    const { dotted, isOpen } = this.state;

    return (
      <DottedContainer ref={this.setDottedRef}>
        <DottedButton
          title="Open links from Unsplash"
          onClick={this.openDottedMenu}
        />
        {isOpen && (
          <DottedPopup>
            <Links>
              {dotted.map(item => (
                <DottedLinkContainer key={item.key}>
                  {item.url.includes('https') ? (
                    <DottedHref href={item.url} title={item.label}>
                      {item.label}
                    </DottedHref>
                    ) : (
                    <DottedLink to={item.url} title={item.label}>
                      {item.label}
                    </DottedLink>
                  )}
                </DottedLinkContainer>
              ))}
            </Links>
            <Socials />
          </DottedPopup>
        )}
      </DottedContainer>
    )
  }
}

export default Dotted;
