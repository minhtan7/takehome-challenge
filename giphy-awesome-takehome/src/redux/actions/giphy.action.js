const getGifData = ({ endpoint, page }) => async (dispatch) => {
  dispatch({ type: "GIF_REQUEST" });
  console.log(endpoint);
  try {
    let url = `https://api.giphy.com/v1/gifs/${endpoint}?&api_key=ScVIO5sr18GgGlKG2Bx2MACE94i7r37Z&page=${page}`;
    console.log(url);
    let response = await fetch(url);
    let data = await response.json();
    console.log("all gifs", data);
    dispatch({ type: "GIF_REQUEST_SUCCESS", payload: data });
  } catch (error) {
    console.log("error", error);
    dispatch({ type: "GIPF_REQUEST_FAIL", payload: error });
  }
};
const getGifDataMore = ({ endpoint, pageNum }) => async (dispatch) => {
  dispatch({ type: "GIF_REQUEST_MORE" });
  console.log(endpoint);
  try {
    let url = `https://api.giphy.com/v1/gifs/${endpoint}?&api_key=ScVIO5sr18GgGlKG2Bx2MACE94i7r37Z&page=${pageNum}`;
    console.log(url);
    let response = await fetch(url);
    let data = await response.json();
    console.log("all gifs more", data);
    dispatch({ type: "GIF_REQUEST_MORE_SUCCESS", payload: { data, pageNum } });
  } catch (error) {
    console.log("error", error);
    dispatch({ type: "GIPF_REQUEST_MORE_FAIL", payload: error });
  }
};

const getSingleGif = () => async (dispatch) => {
  dispatch({ type: "SINGLE_GIF_REQUEST", payload: true });
  try {
    let url =
      "https://api.giphy.com/v1/gifs?ids=0WycUU5PJ71TEwRudv&api_key=ScVIO5sr18GgGlKG2Bx2MACE94i7r37Z&";
    let response = await fetch(url);
    let data = response.json();
    dispatch({ type: "SINGLE_GIF_REQUEST_SUCCESS", payload: data });
  } catch (error) {
    console.log("error", error);
    dispatch({ type: "SINGLE_GIF_REQUEST_FAIL", payload: error });
  }
};

export const gifAction = {
  getGifData,
  getSingleGif,
  getGifDataMore,
};
