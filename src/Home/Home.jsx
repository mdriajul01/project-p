import React from "react";
import Banner from "./Bannar";
import Card from "./Card";
import About from "./About";
import Services from "./Services";
// import Lotte from "./Services";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Card></Card>
     <Services></Services>
      <About></About>
    </div>
  );
};

export default Home;
