import React from "react";

const SearchBox = props => {
  const { searchChange } = props;
  return (
    <div className="tc pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search for your robot..."
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
