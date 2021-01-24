import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { gifAction } from "../redux/actions/giphy.action";
import { Container, Card, CardColumns } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";

const GifList = ({ endpoint }) => {
  const dispatch = useDispatch();
  const gifs = useSelector((state) => state.gif.gifs);
  const page = useSelector((state) => state.gif.page);
  const loading = useSelector((state) => state.gif.loading);
  let newpage = 2;
  const [pageNum, setPageNum] = useState(1);
  useEffect(() => {
    console.log(pageNum);
    dispatch(gifAction.getGifDataMore({ endpoint, pageNum }));
  }, [dispatch, pageNum]);

  useEffect(() => {
    dispatch(gifAction.getGifData({ endpoint, page }));
  }, [dispatch, endpoint]);
  return (
    <Container>
      <h1>List of Gif {endpoint} </h1>
      {loading || gifs.data === undefined ? (
        <h1>loading</h1>
      ) : (
        <InfiniteScroll
          dataLength={gifs.data.length}
          next={() => setPageNum(pageNum + 1)}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {loading || gifs.data === undefined ? (
            <h1>loading</h1>
          ) : (
            <div className="list-gifs">
              {gifs.data.map((g) => {
                return (
                  <div>
                    <img
                      src={g.images.fixed_height.url}
                      alt="gif"
                      key={g.id}
                      className="gif"
                    />
                  </div>
                );
              })}{" "}
            </div>
          )}
        </InfiniteScroll>
      )}
    </Container>
  );
};

export default GifList;
