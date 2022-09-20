import styled, { css } from "styled-components";
import { breakpoints } from "./responsive";

function responsiveProp(prop, callback) {
  if (prop) {
    return breakpoints.map((breakpoint) => {
      if (prop[breakpoint.name]) {
        return css`
          @media (max-width: ${breakpoint.media}px) {
            ${callback(breakpoint)}
          }
        `;
      }
    });
  }
}

export const MagicSquare = styled.div`
  width: 300px;
  height: 300px;
  border: 2px solid black;

  ${({ squareSize }) => {
    return responsiveProp(
      squareSize,
      (breakpoint) => css`
        width: ${squareSize[breakpoint.name]}px;
        height: ${squareSize[breakpoint.name]}px;
      `
    );
  }}
`;
