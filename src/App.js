import React from "react";
import Navbar from "./components/Navbar";
import NewsList from "./components/NewsList";
import Trending from "./components/Trending";
import Last from "./components/Last";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Trending />
      <NewsList />
      <Last />
    </div>
  );
}

export default App;
