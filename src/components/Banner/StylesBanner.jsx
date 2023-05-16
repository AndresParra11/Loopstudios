import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  figure {
    width: 100%;
    height: 30%;
    img {
      width: 84%;
      object-fit: cover;
      margin: 0 8%;
    }
  }

  h2 {
    width: 86%;
    font-size: 2rem;
    font-weight: 100;
    text-align: center;
    padding-top: 1em;
    padding-bottom: 0.5em;
  }
  p {
    font-size: 0.9rem;
    width: 80%;
    text-align: center;
    color: gray;
    font-weight: 400;
  }
`;
