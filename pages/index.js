import React from "react"; // We are writing react so we probably need this
import Link from "next/link"; // the routing library for next
import Head from "../components/head"; // component that updates metadata for each page rendered
import Nav from "../components/nav"; // reusable navbar component

const Home = () => (
  <div>
    <Nav />
    <div>Next meets React</div>
  </div>
);

export default Home;
