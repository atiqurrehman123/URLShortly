import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./layout/Hero";
import Shorten from "./layout/Shorten";
import Statistic from "./layout/Statistic";
import Cta from "./layout/Cta";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Shorten />
      <Statistic />
      <Cta />
      <Footer />
    </div>
  );
  }

export default App;
