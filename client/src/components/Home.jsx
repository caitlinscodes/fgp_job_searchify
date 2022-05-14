import React from "react";
import Splash from "./Splash/Splash"

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
            <Splash />
        </div>
      </div>
    </div>
  );
}

export default Home;