import React from "react";
import "./App.css";
import Header from "../src/components/Header";
import CatImages from "../src/components/CatImages";
import Footer from "../src/components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <CatImages />
      <Footer />
    </div>
  );
}

export default App;
