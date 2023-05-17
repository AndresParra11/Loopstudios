import styled from "styled-components";

export const CardContainer = styled.aside`
  width: 100%;
  position: relative;
  figure {
    width: 100%;
    img {
      width: 88%;
      object-fit: contain;
      margin: 0 6%;
      :hover {
        cursor: pointer;
        opacity: 0.5;
      }
    }
  }
  h2 {
    width: 100px;
    position: absolute;
    bottom: 7%;
    left: 10%;
    z-index: 100;
    color: lightgray;
    font-size: 1.4rem;
    font-weight: 400;
    &:hover {
      cursor: pointer;
    }
  }

  @media (min-width: 900px) {
    width: 23%;
    figure {
      width: 100%;
      img {
        width: 100%;
        margin: 0;
      }
    }
  }
`;
