import React from "react"; // We are writing react so we probably need this
import Link from "next/link"; // the routing library for next
import Head from "../components/head"; // component that updates metadata for each page rendered
import Nav from "../components/nav"; // reusable navbar component

const Home = () => (
  <div className="home-content">
    <Nav />
    {/* Here we are styling to div, to change the color of our text and aligning the text to the right side */}
    <div
      className="home-content__header"
      style={{ color: "red", textAlign: "right" }}
    >
      Next meets React
    </div>
    {/* We have increased the font-size of a div of class name home-content__header */}
    <style jsx>
      {`
        .home-content__header {
          font-size: 32pt;
        }
      `}
    </style>
  </div>
);

export default Home;
