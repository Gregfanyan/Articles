import React from "react";

import Title from "../../components/Title";
import Stories from "../Stories";
import LoadMore from "../../components/LoadMore";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div>
      <Title />
      <Stories />
      <LoadMore />
      <Footer />
    </div>
  );
}

export default Home;
