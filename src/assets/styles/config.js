import { css } from "styled-components";

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376
};

export const colors = {
  baseGray: "#eeeeee",
  hoverGray: "#d1d1d1",
  baseBlack: "#111111",
  baseGrayLink: "#999999",
  baseWhite: "#ffffff",
  borderGray: "#dddddd",
  baseGreen: "#3cb46e",
  baseHoverGreen: "#37a866",
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;

  return accumulator;
}, {});
