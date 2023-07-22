import React, { useState } from "react";
import Heading from "./Components/Heading";
import Search from "./Components/Search";
import Current from "./Components/Current";
function App() {
  const [searchQuery, setSearchQuery] = useState("");
  function handleSearch(value) {
    setSearchQuery(value);
  }
  return (
    <div className="main__container">
      <Heading />
      <Search searchQuery={searchQuery} handleSearchQuery={handleSearch} />
      <Current location={searchQuery} />
    </div>
  );
}

export default App;
