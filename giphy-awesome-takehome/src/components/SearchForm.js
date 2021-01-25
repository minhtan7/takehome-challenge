import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { gifAction } from "../redux/actions/giphy.action";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (searchTerm) => {
    setSearchTerm(searchTerm);
    console.log(searchTerm);
    /* dispatch(gifAction.searchKey(searchTerm)); */
    setSearchTerm("");
  };

  return (
    <form
      className="search-form fixed-top"
      style={{ maxWidth: "1140px", margin: "65px auto" }}
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(searchTerm);
      }}
    >
      <input
        className="search-inp"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <button className="icon-search">
        <FontAwesomeIcon icon="search" />
      </button>
    </form>
  );
};

export default SearchForm;
