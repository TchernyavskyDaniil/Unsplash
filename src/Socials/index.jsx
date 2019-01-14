import React, { PureComponent, Fragment } from "react";
import styled from "styled-components";

import twitterIcon from './icons/twitterIcon.svg';
import facebookIcon from './icons/facebookIcon.svg';
import instagramIcon from './icons/instagramIcon.svg';
import mediumIcon from './icons/mediumIcon.svg';

const Socials = styled.ul`
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

const socials = [
  {
    id: 1,
    title: 'twitter',
    url: 'https://twitter.com/unsplash?utm_source=unsplash&utm_medium=referral',
    icon: twitterIcon,
  },
  {
    id: 2,
    title: 'facebook',
    url: 'https://www.facebook.com/pages/Unsplash/274126369394815?utm_source=unsplash&utm_medium=referral',
    icon: facebookIcon,
  },
  {
    id: 3,
    title: 'instagram',
    url: 'https://instagram.com/unsplash?utm_source=unsplash&utm_medium=referral',
    icon: instagramIcon,
  },
  {
    id: 4,
    title: 'medium',
    url: 'https://medium.com/unsplash?utm_source=unsplash&utm_medium=referral',
    icon: mediumIcon,
  },
];

export default () => (
  <Socials>
    {socials.map(social => (
      <SocialContainer key={social.id}>
        <Social
          title={social.title}
          href={social.url}
        >
          <SocialIcon src={social.icon} />
        </Social>
      </SocialContainer>
    ))}
  </Socials>
)
