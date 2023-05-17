import styled from "styled-components";

export const StylesFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  h2 {
    color: white;
    font-size: 1.5rem;
    text-align: center;
    padding: 1.5rem 0;
    &:hover {
      cursor: pointer;
    }
  }
  span {
    color: gray;
    font-size: 0.8rem;
    margin: 1.5rem 0 3rem 0;
    font-family: "Alata", sans-serif;
  }

  @media (min-width: 760px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    flex-wrap: wrap;
    height: 20vh;
    padding: 0px 6rem 0 8%;
    span {
      align-self: end;
    }
  }
`;

export const ContainerLinksFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 760px) {
    flex-direction: row;
  }
`;

export const ContainerSocialMedia = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  @media (min-width: 760px) {
    align-self: end;
    margin-top: 1.5rem;
  }
`;
