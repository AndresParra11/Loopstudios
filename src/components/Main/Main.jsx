import React from "react";
import { ourCreations } from "../../data/data";
import Card from "../Card/Card";
import { MainContainer } from "./StylesMain";
import Button from "../Button/Button";

const Main = () => {
  return (
    <MainContainer>
      <h1>OUR CREATIONS</h1>
      <div>
        {ourCreations.map((creation) => (
          <Card key={creation.id} creation={creation} />
        ))}
      </div>
      <Button />
    </MainContainer>
  );
};

export default Main;
