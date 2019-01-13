import React, { Fragment, PureComponent } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../assets/styles/config";
import notificationIcon from "./icons/notificationIcon.svg";
import defaultAvatar from "./icons/defaultAvatar.jpg";

const WidgetsContainer = styled.div``;

const Login = styled(Link)`
  color: ${colors.baseGrayLink};
  font-size: 1.4rem;
  line-height: 2rem;
  padding: 0 12px;
  
  &:hover {
    color: ${colors.baseBlack};
  }
`;

const NotificationButton = styled.button`
  
`;

const NotificationIcon = styled.img``;

const Profile = styled(Link)``;

const ProfileImage = styled.img``;

const Join = styled(Link)``;

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
              Join Free
            </Join>
          </Fragment>
        )}
      </WidgetsContainer>
    )
  }
}

export default Widgets;
