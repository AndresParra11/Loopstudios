import styled from "styled-components";
import backgroundImage from "../../assets/images/mobile/image-hero.jpg";
import backgroundImageDesktop from "../../assets/images/desktop/image-hero.jpg";

export const StylesHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  margin-bottom: 5em;
  height: 42em;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  h2 {
    color: white;
    font-size: 1.5rem;
    text-align: center;
    &:hover {
      cursor: pointer;
    }
  }
  span {
    color: white;
    &:hover {
      cursor: pointer;
    }
  }
  h1 {
    display: flex;
    justify-content: center;
    color: white;
    width: 90%;
    font-size: 2.5rem;
    font-family: system-ui;
    font-weight: 100;
    padding: 1.5rem;
    margin: 0 auto;
    border: 1px solid white;
  }

  @media (min-width: 680px) {
    background-image: url(${backgroundImageDesktop});
    background-size: cover;
    background-repeat: no-repeat;
    gap: 0;
    margin-bottom: 8rem;
    height: 70vh;
    span {
      display: none;
    }
    h1 {
      width: 38%;
      margin: 2rem 0 0 8rem;
      font-size: 3.2rem;
      letter-spacing: 0.3rem;
      font-family: system-ui;
      padding: 1rem 2rem;
    }
    h2 {
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 680px) and (max-width: 850px) {
    h1 {
      width: 55%;
      margin: 2rem 0 0 4rem;
    }
  }
  @media screen and (min-width: 550px) and (max-width: 680px) {
    h1 {
      text-align: center;
    }
  }
  @media screen and (min-width: 1280px) {
    h1 {
      width: 30%;
    }
  }
`;

export const ContainerTitleHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 1.5rem;

  @media (min-width: 600px) {
    padding: 3rem 8rem;
  }
  @media screen and (min-width: 680px) and (max-width: 850px) {
    padding: 3rem 4rem;
  }
`;

export const MenuLinksHeader = styled.div`
  display: none;
  @media (min-width: 680px) {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`;
