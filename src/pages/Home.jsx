import React from "react";
import Hero from "../components/Hero";
import PhoneContainer from "../components/PhonesContainer";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  

  return (
    <div>
      <Hero />
      <PhoneContainer phones ={data} />
    </div>
  );
};

export default Home;
