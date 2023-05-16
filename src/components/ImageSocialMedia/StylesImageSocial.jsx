import styled from "styled-components";

export const ImageSocial = styled.img`
  filter: invert(100%);
  width: 1.8rem;
  height: 2rem;
  object-fit: contain;
  border-bottom: 2px solid white;
  padding-bottom: 0.4rem;
  transition: border-color 0.2s ease-in-out;
  &:hover {
    border-color: black;
    cursor: pointer;
    transform: scale(1.1);
  }
`;
