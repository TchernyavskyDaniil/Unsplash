import React, { Fragment, PureComponent } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import styledMap from "styled-map";
import Masonry from 'react-masonry-component';
import BottomScrollListener from 'react-bottom-scroll-listener';

import { AXIOS } from "../apiConfig";
import { accessKey } from "../accessConfig";
import Photo from "./Photo";

const PhotosContainer = styled.div`
  padding: 50px 0 0 0;
  margin: 40px 40px 0 40px;
  
  .search-gallery {
    padding: 0;
    margin-bottom: 0;
  }
`;

const PhotoList = styled.li`
  padding-bottom: 40px;
  list-style: none;
  padding-left: 40px;
`;

class Photos extends PureComponent {
  state = {
    photos: null,
    isError: false,
    pageYOffset: 1200,
    perPage: 20,
    page: 1,
  };

  componentDidMount() {
    const { page } = this.state;
    this.getPhotos(page);
  }

  handleOnBottom = () => {
    const { page } = this.state;

    this.getPhotos(page + 1);
  }

  getPhotos = newPage => {
    const { perPage, photos, page } = this.state;
    let localPhotos;

    AXIOS.get('photos/', {
      params: {
        client_id: accessKey,
        per_page: perPage,
        page: newPage,
      }
    }).then(
      response => {
        if (response.status === 200) {
          if (page !== newPage) {
            localPhotos = [...photos, ...response.data];
          } else {
            localPhotos = response.data;
          }

          this.setState({ photos: localPhotos, page: newPage});
        } else {
          this.setState({
            isError: true,
          })
        }
      },
      error => {
        this.setState({ isError: true });
        console.log(error);
      }
    );

  };

  refPhotosWrapper = node => this.setState({ pageYOffset: node });

  render() {
    const { photos } = this.state;
    return (
      <PhotosContainer>
        {photos !== null ? (
          <BottomScrollListener onBottom={this.handleOnBottom}>
            <div ref={this.refPhotosWrapper}>
              <Masonry
                className={'search-gallery'} // default ''
                elementType={'ul'} // default 'div'
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
              >
                {photos.map(photo => (
                  <PhotoList key={photo.id}>
                    <Photo
                      photoUrl={photo.urls.small}
                      name={photo.user.name}
                      likes={photo.likes}
                      profileImage={photo.user.profile_image.small}
                    />
                  </PhotoList>
                ))}
              </Masonry>
            </div>
          </BottomScrollListener>
        ) : (
          <p> Фотографии отсутствуют </p>
        )}
      </PhotosContainer>
    )
  }
}

export default Photos;
