const initialState = {
  gifs: [],
  loading: false,
  selectedGif: null,
  page: 1,
  gifsMore: [],
};

const gifReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GIF_REQUEST":
      return { ...state, loading: true };
    case "GIF_REQUEST_SUCCESS":
      console.log("loading success", state.loading);
      return { ...state, gifs: payload, loading: false };
    case "GIF_REQUEST_FAIL":
      return { ...state, error: payload, loading: false };

    case "GIF_REQUEST_MORE":
      return { ...state, loading: true };
    case "GIF_REQUEST_MORE_SUCCESS":
      console.log("loading success", state.loading);
      return {
        ...state,
        gifsMore: payload.data,
        loading: false,
        page: payload.pageNum,
      };
    case "GIF_REQUEST_MORE_FAIL":
      return { ...state, error: payload, loading: false };

    case "SINGLE_GIF_REQUEST":
      return { ...state, loading: true };
    case "SINGLE_GIF_REQUEST_SUCCESS":
      return { ...state, selectedGif: payload, loading: false };
    case "SINGLE_GIF_REQUEST_FAIL":
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};

export default gifReducer;
