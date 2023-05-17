import React from "react";
import { ourCreations } from "../../data/data";
import Card from "../Card/Card";
import { ContainerCards, ContainerMobile, MainContainer } from "./StylesMain";
import Button from "../Button/Button";

const Main = () => {
  return (
    <MainContainer>
      <ContainerMobile>
        <h1>OUR CREATIONS</h1>
        <Button />
      </ContainerMobile>
      <h1>OUR CREATIONS</h1>
      <ContainerCards>
        {ourCreations.map((creation) => (
          <Card key={creation.id} creation={creation} />
        ))}
      </ContainerCards>
      <Button />
    </MainContainer>
  );
};

export default Main;
