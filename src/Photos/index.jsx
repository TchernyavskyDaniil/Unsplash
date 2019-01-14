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
  };

  componentDidMount() {
    AXIOS.get('photos/', {
      params: {
        client_id: accessKey,
      }
    }).then(
      response => {
        if (response.status === 200) {
          const photos = response.data;

          this.setState({
            photos,
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
    )
  }

  render() {
    const { photos } = this.state;
    return (
      <PhotosContainer>
        {photos !== null ? (
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
        ) : (
          <p> Фотографии отсутствуют </p>
        )}
      </PhotosContainer>
    )
  }
}

export default Photos;
