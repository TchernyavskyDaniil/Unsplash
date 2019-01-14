import React, { Fragment, PureComponent } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../assets/styles/config";
import notificationIcon from "./icons/notificationIcon.svg";
import defaultAvatar from "./icons/defaultAvatar.jpg";

const WidgetsContainer = styled.div`
  margin-left: 12px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  
  &:before {
    position: absolute;
    left: -4px;
    display: inline-block;
    width: 1px;
    height: 32px;
    content: "";
    background-color: ${colors.borderGray};
  }
`;

const Login = styled(Link)`
  color: ${colors.baseGrayLink};
  font-size: 1.4rem;
  line-height: 2rem;
  padding: 0 12px 0 20px;
  font-weight: 500;
  text-decoration: none;
  transition: 0.1s ease-out;
  
  &:hover {
    color: ${colors.baseBlack};
  }
`;

const NotificationButton = styled.button`
  
`;

const NotificationIcon = styled.img``;

const Profile = styled(Link)``;

const ProfileImage = styled.img``;

const Join = styled(Login)`
  border: 1px solid ${colors.baseGreen};
  background-color: ${colors.baseGreen};
  border-radius: 4px;
  color: ${colors.baseWhite};
  padding: 6px 12px;
  margin-left: 12px;
  
  &:hover {
    color: ${colors.baseWhite};
    background-color: ${colors.baseHoverGreen};
  }
`;

class Widgets extends PureComponent {
  state = {
    isToken: false,
  };

  render() {
    const { isToken } = this.state;

    return (
      <WidgetsContainer>
        {isToken ? (
          <Fragment>
            <NotificationButton>
              <NotificationIcon
                title="Your notifications"
                src={notificationIcon}
              />
            </NotificationButton>
            <Profile to="/profile">
              <ProfileImage
                src={defaultAvatar}
                title="Your avatar from Unsplash"
              />
            </Profile>
          </Fragment>
        ) : (
          <Fragment>
            <Login to="/login">
              Login
            </Login>
            <Join to="/join">
              Join
            </Join>
          </Fragment>
        )}
      </WidgetsContainer>
    )
  }
}

export default Widgets;
