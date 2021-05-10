import React from "react";
import "./App.css";
import Row from "./Row";
import champs from "./champlist";
import CarouselContainer from "./CarouselContainer";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <CarouselContainer />

      {champs.map((item) => {
        console.log(item);
        return (
          <>
            <Row title={item} />
          </>
        );
      })}
    </div>
  );
}

export default App;
