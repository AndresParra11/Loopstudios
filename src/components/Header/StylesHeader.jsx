import styled from "styled-components";
import backgroundImage from "../../assets/images/mobile/image-hero.jpg";

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
    font-family: "Josefin", sans-serif;
    font-weight: 100;
    padding: 1.5rem;
    margin: 0 auto;
    border: 1px solid white;
  }
`;

export const ContainerTitleHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 1.5rem;
`;
