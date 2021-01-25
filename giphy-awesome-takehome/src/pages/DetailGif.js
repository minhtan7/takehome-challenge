import React, { useEffect } from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { gifAction } from "../redux/actions/giphy.action";
import LeftSideBar from "../components/LeftSideBar";
import { Container } from "react-bootstrap";

const DetailGif = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedGif = useSelector((state) => state.gif.selectedGif);
  const loading = useSelector((state) => state.gif.loading);
  useEffect(() => {
    dispatch(gifAction.getSingleGif(id));
  }, [id]);
  console.log(selectedGif);
  let localData = JSON.parse(localStorage.getItem("users")).isAuthenticated;
  return (
    <>
      {localData ? (
        <Container style={{ display: "flex", marginTop: "150px" }}>
          <LeftSideBar />
          <div className="selected-gif">
            {selectedGif === null || loading ? (
              <h1>loading</h1>
            ) : (
              <>
                <img
                  src={selectedGif.data.images.original.url}
                  alt="gif"
                  key={selectedGif.data.id}
                />
                <div>{selectedGif.data.user.display_name}</div>
              </>
            )}
          </div>
        </Container>
      ) : (
        <Redirect to="/login" />
      )}{" "}
    </>
  );
};

export default DetailGif;
{
  /* <Link to="/sports" className="nav-link" style={{ color: "white" }}>
          Sports
        </Link> */
}
