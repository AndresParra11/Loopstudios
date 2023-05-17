import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 2rem;
    font-weight: 300;
    text-align: center;
    padding-top: 2em;
    padding-bottom: 1.5em;
  }
  /*   div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  } */

  @media (min-width: 900px) {
    margin: 0px 6rem 4rem 8%;
    h1 {
      display: none;
    }
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 900px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
  }
`;

export const ContainerMobile = styled.div`
  display: none !important;
  @media (min-width: 900px) {
    width: 100%;
    display: flex !important;
    flex-direction: row !important;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4rem;
    h1 {
      display: block;
      padding: 0;
    }
    button {
      display: block;
      margin: 0;
    }
  }
`;
