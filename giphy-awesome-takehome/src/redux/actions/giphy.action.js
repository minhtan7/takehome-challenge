const getGifDataMore = ({ endpoint, pageNum }) => async (dispatch) => {
  dispatch({ type: "GIF_REQUEST_MORE", payload: endpoint });
  console.log(endpoint);
  try {
    let url = `https://api.giphy.com/v1/gifs/${endpoint}?&api_key=ScVIO5sr18GgGlKG2Bx2MACE94i7r37Z&page=${pageNum}`;
    console.log(url);
    let response = await fetch(url);
    let data = await response.json();
    console.log("all gifs", data);
    dispatch({ type: "GIF_REQUEST_MORE_SUCCESS", payload: data });
  } catch (error) {
    console.log("error", error);
    dispatch({ type: "GIPF_REQUEST_MORE_FAIL", payload: error });
  }
};

const getSingleGif = (id) => async (dispatch) => {
  dispatch({ type: "SINGLE_GIF_REQUEST", payload: true });
  console.log(id);
  try {
    let url = `https://api.giphy.com/v1/gifs/${id}?api_key=ScVIO5sr18GgGlKG2Bx2MACE94i7r37Z`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch({ type: "SINGLE_GIF_REQUEST_SUCCESS", payload: data });
  } catch (error) {
    console.log("error", error);
    dispatch({ type: "SINGLE_GIF_REQUEST_FAIL", payload: error });
  }
};
const sortLatest = () => async (dispatch) => {
  dispatch({ type: "SORT_REQUEST" });
  try {
    dispatch({ type: "SORT_REQUEST_SUCCESS" });
  } catch (error) {
    dispatch({ type: "SORT_REQUEST_FAIL", payload: error });
  }
};
const trendingKey = () => async (dispatch) => {
  dispatch({ type: "TRENDING_KEY_REQUEST" });
  try {
    let url = `https://api.giphy.com/v1/trending/searches?api_key=ScVIO5sr18GgGlKG2Bx2MACE94i7r37Z&lang=vn`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch({ type: "TRENDING_KEY_SUCCESS", payload: data.data });
  } catch (error) {
    dispatch({ type: "TRENDING_KEY_FAIL", payload: error });
  }
};
/* const searchKey = (searchTerm) => async (dispatch) => {
  dispatch({ type: "SEARCH_KEY_REQUEST" });
  try {
    dispatch({ type: "SEARCH_KEY_SUCCESS", payload: searchTerm });
  } catch (error) {
    dispatch({ type: "SEARCH_KEY_FAIL", payload: error });
  }
}; */

export const gifAction = {
  getSingleGif,
  getGifDataMore,
  sortLatest,
  trendingKey,
};
