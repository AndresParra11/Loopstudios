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

  @media (min-width: 900px) {
    display: flex;
    flex-direction: row;
    position: relative;
    margin: 0 6rem 4rem 8%;
    figure {
      width: 50%;
      img {
        width: 100%;
        object-fit: cover;
        margin: 0;
      }
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-family: system-ui;
    width: 86%;
    font-size: 2rem;
    font-weight: 300;
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
    font-family: "Alata", sans-serif;
  }
  @media (min-width: 900px) and (max-width: 1060px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 460px;
    position: absolute;
    background-color: white;
    bottom: 0;
    left: 38%;
    padding: 2rem 0 0 4rem;
    h2 {
      text-align: left;
      width: 80%;
      padding: 0;
      letter-spacing: 6px;
      font-weight: 400;
      padding-bottom: 2rem;
      font-size: 1.5rem;
    }
    p {
      font-size: 0.9rem;
      text-align: left;
      line-height: 1.5;
      width: 100%;
    }
  }
  @media (min-width: 1060px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 590px;
    position: absolute;
    background-color: white;
    bottom: 0;
    left: 38%;
    padding: 2rem 0 0 4rem;
    h2 {
      text-align: left;
      width: 60%;
      padding: 0;
      letter-spacing: 6px;
      font-weight: 400;
      padding-bottom: 2rem;
    }
    p {
      font-size: 1.2rem;
      text-align: left;
      line-height: 1.5;
      width: 100%;
    }
  }
`;
