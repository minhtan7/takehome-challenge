import React, { useState } from "react";

const SearchForm = ({ handleSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <form
      className="form-inline"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(searchTerm);
      }}
    >
      <input
        className=" mr-sm-2 form-control inputNav"
        type="text"
        placeholder="search for..."
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
