import React, { PureComponent } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import styledMap from "styled-map";
import { AXIOS } from "../apiConfig";
import { accessKey } from "../accessConfig";

const PhotosContainer = styled.div``;

class Photos extends PureComponent {
  state = {
   photos: null,
  };

  componentDidMount() {
    AXIOS.get('photos/', {
      params: {
        client_id: accessKey,
      }
    }).then(
      response => {
        if (response.status === 200) {
          this.setState({
            photos: response.data,
          })
        }
      }
    )
  }

  render() {
    const { photos } = this.state;
    return (
      <PhotosContainer>
        {console.log(photos)}
      </PhotosContainer>
    )
  }
}

export default Photos;
