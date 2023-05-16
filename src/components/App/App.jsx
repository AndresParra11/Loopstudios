import React from "react";
import Header from "../Header/Header";
import GlobalStyles from "./StylesApp";
import Banner from "../Banner/Banner";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Banner />
      <Main />
      <Footer />
    </div>
  );
};
export default App;
