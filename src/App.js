import React from "react";
import NavBar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import LondonLaidBack from "./components/Cards/LondonLaidBack";
import "./app.css";

const App = () => (
<div>
  <div>
   <NavBar />
  </div>
  <div className="results">
    <Wrapper>
      <LondonLaidBack />
      
    </Wrapper>
  </div>
</div>
);

export default App;
