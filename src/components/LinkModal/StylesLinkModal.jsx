import styled from "styled-components";

export const StylesLinkModal = styled.span`
  font-family: system-ui;
  font-size: 1.8rem;
  font-weight: 100;
  color: white;
  position: relative;
  &:hover {
    cursor: pointer;
    font-size: 2rem;
  }
  &:hover::after {
    content: "";
    left: 0;
    position: absolute;
    bottom: -6px;
    width: 100%;
    height: 2px;
    background-color: white;
  }
`;
