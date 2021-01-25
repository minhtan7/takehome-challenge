import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { gifAction } from "../redux/actions/giphy.action";
import { Container, Card, CardColumns } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import LeftSideBar from "./LeftSideBar";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const GifList = ({ endpoint }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.gif.loading);
  const gifs = useSelector((state) => state.gif.gifs);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    console.log("pageNum", pageNum);
    dispatch(gifAction.getGifDataMore({ endpoint, pageNum }));
  }, [dispatch, pageNum, endpoint]);
  useEffect(() => {
    setPageNum(1);
  }, [endpoint]);
  let newDate = new Date();
  return (
    <div style={{ display: "flex", marginTop: "150px" }}>
      <LeftSideBar />
      <Container>
        {endpoint === "trending" ? (
          <h1 className="endpoint-title">{endpoint} GIFS </h1>
        ) : endpoint === "search?q=reaction" ? (
          <h1 className="endpoint-title"> reactions GIFS </h1>
        ) : endpoint === "search?q=sport" ? (
          <h1 className="endpoint-title">sports GIFS </h1>
        ) : endpoint === "search?q=sticker" ? (
          <h1 className="endpoint-title">stickers GIFS </h1>
        ) : endpoint === "search?q=weird" ? (
          <h1 className="endpoint-title">weirds GIFS </h1>
        ) : (
          <h1 className="endpoint-title">celebrites GIFS </h1>
        )}

        {gifs === undefined ? (
          <h1>loading</h1>
        ) : (
          <InfiniteScroll
            dataLength={gifs.length}
            next={() => setPageNum(pageNum + 1)}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          >
            <div className="list-gifs">
              {gifs.map((g) => {
                return (
                  <Link to={`/gif/${g.id}`} className="container-gif">
                    <img
                      src={g.images.fixed_height.url}
                      alt="gif"
                      key={g.id}
                      className="gif"
                    />
                    <div className="hover-text">{g.username}</div>
                    <Moment className="hover-time" fromNow>
                      {g.import_datetime}
                    </Moment>
                  </Link>
                );
              })}{" "}
            </div>
          </InfiniteScroll>
        )}
      </Container>
    </div>
  );
};

export default GifList;
