import React from "react";
import "./styles.css";

const Search = ({ setserchedvalue }) => {
  return (
    <div className="search-bar">
      <div className="data">
        <p className="label"> Search Your Favorite Cocktail</p>
        <input
          className="input"
          type="text"
          placeholder=" find your best falvor"
          onChange={(e) => {
            setserchedvalue(e.target.value);
          }}
        />
      </div>
    </div>
  );
};
export default Search;
