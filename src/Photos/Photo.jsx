import React, { Fragment, PureComponent } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import styledMap from "styled-map";

import likeIcon from './icons/likeIcon.svg';
import addIcon from './icons/addIcon.svg';
import downloadIcon from './icons/downloadIcon.svg';
import { colors } from "../assets/styles/config";

const PhotoImage = styled.img``;

const PhotoInfo = styled.div`
  position: absolute;
  opacity: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: opacity .15s ease-in-out,visibility .15s ease-in-out;
  display: flex;
  visibility: hidden;
  flex-direction: column;
  justify-content: space-between;
  background-image: linear-gradient(180deg,rgba(0,0,0,.2) 0,rgba(0,0,0,.199) 3.5%,rgba(0,0,0,.195) 7%,rgba(0,0,0,.19) 10.35%,rgba(0,0,0,.182) 13.85%,rgba(0,0,0,.174) 17.35%,rgba(0,0,0,.165) 20.85%,rgba(0,0,0,.155) 24.35%,rgba(0,0,0,.145) 27.85%,rgba(0,0,0,.135) 31.35%,rgba(0,0,0,.126) 34.85%,rgba(0,0,0,.118) 38.35%,rgba(0,0,0,.11) 41.85%,rgba(0,0,0,.105) 45.35%,rgba(0,0,0,.1) 48.85%,rgba(0,0,0,.103) 52.35%,rgba(0,0,0,.112) 55.85%,rgba(0,0,0,.126) 59.35%,rgba(0,0,0,.144) 62.85%,rgba(0,0,0,.165) 66.35%,rgba(0,0,0,.188) 69.85%,rgba(0,0,0,.213) 73.35%,rgba(0,0,0,.237) 76.85%,rgba(0,0,0,.262) 80.35%,rgba(0,0,0,.285) 83.85%,rgba(0,0,0,.306) 87.35%,rgba(0,0,0,.324) 90.85%,rgba(0,0,0,.338) 94.35%,rgba(0,0,0,.347) 97.85%,rgba(0,0,0,.35));
`;

const PhotoContainer = styled.div`
  cursor: zoom-in;
  position: relative;
  
  &:hover {
    ${PhotoInfo} {
      opacity: 1;
      visibility: initial;
    }
  }
`;

const PhotoTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 20px 10px 0 0;
`;

const Likes = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.4rem;
  border-radius: 4px;
  padding: 10px;
  border: transparent;
  transition: all 0.1s ease-out;
  margin-right: 10px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  
  &:hover {
    opacity: 0.8;
  }
`;

const AddToCollect = styled.img`
  border-radius: 4px;
  padding: 10px;
  margin-right: 10px;
  transition: all 0.1s ease-out;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  background-color: ${colors.baseWhite};
  width: 15px;
  height: 15px;

  &:hover {
    opacity: 0.8;
  }
`;

const PhotoBottom = styled(PhotoTop)`
  justify-content: space-between;
  padding: 0 20px 20px 20px;
`;

const AuthorContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 95px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const AuthorImage = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  margin-right: 10px;
`;

const Author = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${colors.baseWhite};
  margin: 0;
`;

const Download = styled(Likes)`
  padding: 8px;
`;

const DownloadIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const LikeIcon = styled.img`
  margin-right: 8px;
  width: 16px;
  height: 16px;
`;

class Photo extends PureComponent {
  render() {
    const {
      photoUrl,
      name,
      likes,
      profileImage,
    } = this.props;

    return (
      <PhotoContainer>
        <PhotoImage
          src={photoUrl}
          title={`Show photo by a ${name}`}
        />
        <PhotoInfo>
          <PhotoTop>
            <Likes>
              <LikeIcon src={likeIcon} title="Add like to photo" />
              {likes}
            </Likes>
            <AddToCollect src={addIcon} title="Add to collect photo" />
          </PhotoTop>
          <PhotoBottom>
            <AuthorContainer>
              <AuthorImage src={profileImage} title="Photo" />
              <Author>{name}</Author>
            </AuthorContainer>
            <Download title="Download">
              <DownloadIcon src={downloadIcon} />
            </Download>
          </PhotoBottom>
        </PhotoInfo>
      </PhotoContainer>
    )
  }
}

export default Photo;
