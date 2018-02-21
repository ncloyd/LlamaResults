import React from "react";
import NavBar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import ResCard from "./components/Cards/ResCard";
import LandCard from "./components/Cards/LandCard";
import ActCard from "./components/Cards/ActCard";
import personality from "./london.json";
import "./app.css";

const App = () => (
<div>
  <div>
   <NavBar />
  </div>
  <div className="results">
    <Wrapper>
      <h1>London</h1>
              <ResCard
                res1={personality[0].restaurants[0].name}
                res2={personality[0].restaurants[1].name}
                res3={personality[0].restaurants[2].name}
              />
              <LandCard
                land1={personality[0].landmarks[0].name}
                land2={personality[0].landmarks[1].name}
                land3={personality[0].landmarks[2].name}
              />
              <ActCard
                act1={personality[0].activities[0].name}
                act2={personality[0].activities[1].name}
                act3={personality[0].activities[2].name}
              />
    </Wrapper>
    <Wrapper>
      <h1>Also London</h1>
              <ResCard
                res1={personality[1].restaurants[0].name}
                res2={personality[1].restaurants[1].name}
                res3={personality[1].restaurants[2].name}
              />
              <LandCard
                land1={personality[1].landmarks[0].name}
                land2={personality[1].landmarks[1].name}
                land3={personality[1].landmarks[2].name}
              />
              <ActCard
                act1={personality[1].activities[0].name}
                act2={personality[1].activities[1].name}
                act3={personality[1].activities[2].name}
              />
    </Wrapper>
  </div>
</div>
);

export default App;
