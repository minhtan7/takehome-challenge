import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (searchTerm) => {
    setSearchTerm(searchTerm);
    console.log(searchTerm);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(searchTerm);
      }}
    >
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <div>
        <FontAwesomeIcon icon="search" />
      </div>
    </form>
  );
};

export default SearchForm;
