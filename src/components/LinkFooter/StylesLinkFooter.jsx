import styled from "styled-components";

export const StylesLinkFooter = styled.p`
  color: white;
  font-size: 1rem;
  font-family: "Alata", sans-serif;
  text-align: center;
  position: relative;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  &:hover::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -5px;
    width: 50%;
    height: 2px;
    background-color: white;
  }
`;
