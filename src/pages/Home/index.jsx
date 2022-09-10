import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Header/Navbar";
import { Api } from "../../consumoApi/consumoApi";
import ListaPosts from "./ListaPosts";

const Home = () => {
  const { data } = Api();

  console.log(data);
  return (
    <div>
      <Navbar />
      <Header />
      <ListaPosts blog={data} />

    </div>
  );
};

export default Home;