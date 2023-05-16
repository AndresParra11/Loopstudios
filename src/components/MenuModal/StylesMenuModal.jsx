import styled from "styled-components";

export const StylesMenuModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9rem;
  background-color: black;
  color: white;
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;
  height: 100vh;
  width: 100%;
`;

export const ContainerTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 2rem;
  h2 {
    font-size: 1.8rem;
    &:hover {
      cursor: pointer;
    }
  }
`;
export const ContainerMenus = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 2rem;
`;
