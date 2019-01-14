import React, { PureComponent } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import styledMap from "styled-map";

import { colors } from "../assets/styles/config";
import { AXIOS } from "../apiConfig";
import { accessKey } from "../accessConfig";
import { Search, SearchButton, SearchField } from '../UI/Search';

const SearchPhotosWrapper = styled.div`
  padding-top: 50px;
  background-color: ${props => props.color};
  background-image: ${props => `url(${props.downloadedImage})` || ''};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Container = styled.div`
  padding: 150px 10px;
  margin: 0 auto;
  width: 60%;
`;

const Title = styled.h2`
  font-size: 4.6rem;
  line-height: 1.2;
  color: ${colors.baseWhite};
  margin: 0 0 15px 0;
`;

const SubTitle = styled.h3`
  color: ${colors.baseWhite};
  font-size: 2rem;
  line-height: 1.8rem;
  margin: 0 0 10px 0;
`;

const Desc = styled.p`
  color: ${colors.baseWhite};
  font-size: 1.8rem;
  line-height: 1.8rem;
  margin: 0 0 20px 0;
  font-weight: 500;
`;

class SearchPhotos extends PureComponent {
  state = {
    image: null,
    color: 'black',
  };

  componentDidMount() {
    AXIOS.get('photos/random/', {
      params: {
        client_id: accessKey,
      }
    }).then(
      response => {
        if (response.status === 200) {
          this.setState({
            image: response.data.urls.regular,
            color: response.data.color,
            isError: false,
          })
        } else {
          this.setState({
            isError: true,
          })
        }
      },
      error => {
        this.setState({ isError: error });
        console.log(error);
      }
    )
  }

  render() {
    const { image, color } = this.state;

    return (
      <SearchPhotosWrapper downloadedImage={image} color={color}>
        <Container>
          <Title>
            Unsplash
          </Title>
          <SubTitle>
            Beautiful, free photos.
          </SubTitle>
          <Desc>
            Gifted by the world’s most generous community of photographers. 🎁
          </Desc>
          <Search easyBorder easyGray homeWidth>
            <SearchButton title="Search Unsplash demo" />
            <SearchField
              type="text"
              id="search-input"
              placeholder="Search some photos here"
            />
          </Search>
        </Container>
      </SearchPhotosWrapper>
    )
  }
}

export default SearchPhotos;
