import React from "react";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import DataFilter from "../components/DataFilter";

const Home = () => {
  return (
    <>
    <Header />
    <section class="container px-4 py-[120px] mx-auto">
      <DataFilter />
      <Table />
      <Pagination />
    </section>
    </>
    
  );
};

export default Home;
