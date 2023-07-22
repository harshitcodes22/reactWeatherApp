import styling from "./Search.module.css";
import search from "../img/search.png";

function Search({ searchQuery, handleSearchQuery }) {
  return (
    <div className={styling.container}>
      <img src={search} alt="" className={styling.searchIcon} />
      <input
        type="text"
        className={styling.inputText}
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => handleSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default Search;
