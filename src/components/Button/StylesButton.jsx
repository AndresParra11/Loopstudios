import styled from "styled-components";

export const StylesButton = styled.button`
  width: fit-content;
  margin: 2rem 0 5rem 0;
  letter-spacing: 0.2rem;
  padding: 0.4rem 2rem;
  border: 2px solid black;
  background-color: transparent;
  font-weight: 500;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  @media (min-width: 900px) {
    display: none;
  }
`;
