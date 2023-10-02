import React from "react";
import { Header } from "./components/Header";
import SearchBox from "./components/SearchBox";
import Presentation from "./components/Slide";
function App() {
  return (
    <div>
      <Header />
      <SearchBox />
      <Presentation />
    </div>
  );
}

export default App;
