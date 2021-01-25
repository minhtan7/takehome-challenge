import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gifAction } from "../redux/actions/giphy.action";

const TrendingKey = () => {
  /* https://api.giphy.com/v1/trending/searches?api_key=ScVIO5sr18GgGlKG2Bx2MACE94i7r37Z&lang=vn */
  const dispatch = useDispatch();
  const trendingKey = useSelector((state) => state.gif.trendingKey);
  const loading = useSelector((state) => state.gif.loading);
  useEffect(() => {
    dispatch(gifAction.trendingKey());
  }, [dispatch]);
  return (
    <div>
      {loading || trendingKey === null ? (
        <h1>loading</h1>
      ) : (
        trendingKey.map((k) => {
          return <div className="trending-key">#{k} </div>;
        })
      )}
    </div>
  );
};

export default TrendingKey;
