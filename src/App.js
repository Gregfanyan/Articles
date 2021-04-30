import React from "react";

import Title from "./components/Title";
import Stories from "./pages/Stories";
import LoadMore from "./components/LoadMore";
import Footer from "./components/Footer";
import Buttons from "./components/Buttons";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Title />
      <Buttons />
      <Stories />
      <LoadMore />
      <Footer />
    </div>
  );
}

export default App;
