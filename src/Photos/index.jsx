import React, { Fragment, PureComponent } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import styledMap from "styled-map";
import Masonry from 'react-masonry-component';

import { AXIOS } from "../apiConfig";
import { accessKey } from "../accessConfig";

const PhotosContainer = styled.div`
  padding: 50px 0 0 0;
  margin: 40px;
  
  .search-gallery {
    padding: 0;
  }
`;

const Photo = styled.li`
  padding-bottom: 40px;
  list-style: none;
  padding-left: 40px;
`;

const PhotoImage = styled.img``;

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

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { page } = this.state;

    if (this.photosWrapper !== null && window.pageYOffset + 400 >= this.photosWrapper.clientHeight) {
      this.getPhotos(page + 1);
      window.removeEventListener('scroll', this.handleScroll);
    }
  };

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

          this.setState({
            photos: localPhotos,
            page: newPage,
          })
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

    window.addEventListener('scroll', this.handleScroll);
  };

  photosWrapper = node => this.photosWrapper = node;

  render() {
    const { photos } = this.state;
    return (
      <PhotosContainer>
        {photos !== null ? (
          <div ref={this.photosWrapper}>
            <Masonry
              className={'search-gallery'} // default ''
              elementType={'ul'} // default 'div'
              disableImagesLoaded={false} // default false
              updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            >
              {photos.map(photo => (
                <Photo key={photo.id}>
                  <PhotoImage src={photo.urls.small} />
                </Photo>
              ))}
            </Masonry>
          </div>
        ) : (
          <p> Фотографии отсутствуют </p>
        )}
      </PhotosContainer>
    )
  }
}

export default Photos;
