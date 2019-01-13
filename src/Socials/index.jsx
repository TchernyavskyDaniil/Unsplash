import React, { PureComponent, Fragment } from "react";
import styled from "styled-components";

import twitterIcon from './icons/twitterIcon.svg';
import facebookIcon from './icons/facebookIcon.svg';
import instagramIcon from './icons/instagramIcon.svg';
import mediumIcon from './icons/mediumIcon.svg';

const SocialsContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  padding: 0 12px 12px 12px;
  margin: 0;
  justify-content: space-between;
`;

const SocialContainer = styled.li``;

const Social = styled.a`
  width: 20px;
  height: 20px;
  padding: 5px;
  display: flex;
  flex-direction: column;
`;

const SocialIcon = styled.img`
  height: 100%;
  width: 100%;
  transition: 0.1s ease-out;
  
  &:hover {
    opacity: 0.6;
  }
`;

class Socials extends PureComponent {
  state = {
    twitter: {
      title: 'twitter',
      url: 'https://twitter.com/unsplash?utm_source=unsplash&utm_medium=referral',
    },
    facebook: {
      title: 'facebook',
      url: 'https://www.facebook.com/pages/Unsplash/274126369394815?utm_source=unsplash&utm_medium=referral',
    },
    instagram: {
      title: 'instagram',
      url: 'https://instagram.com/unsplash?utm_source=unsplash&utm_medium=referral',
    },
    medium: {
      title: 'medium',
      url: 'https://medium.com/unsplash?utm_source=unsplash&utm_medium=referral',
    },
  };

  render() {
    const { twitter, facebook, instagram, medium } = this.state;

    return (
      <SocialsContainer>
        <SocialContainer>
          <Social
            title={twitter.title}
            href={twitter.url}
          >
            <SocialIcon src={twitterIcon} />
          </Social>
        </SocialContainer>
        <SocialContainer>
          <Social
            title={facebook.title}
            href={facebook.url}
          >
            <SocialIcon src={facebookIcon} />
          </Social>
        </SocialContainer>
        <SocialContainer>
          <Social
            title={instagram.title}
            href={instagram.url}
          >
            <SocialIcon src={instagramIcon} />
          </Social>
        </SocialContainer>
        <SocialContainer>
          <Social
            title={medium.title}
            href={medium.url}
          >
            <SocialIcon src={mediumIcon} />
          </Social>
        </SocialContainer>
      </SocialsContainer>
    )
  }
}

export default Socials;
