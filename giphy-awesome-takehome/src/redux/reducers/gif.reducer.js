const initialState = {
  gifs: [],
  loading: false,
  selectedGif: null,
  endpoint: "",
  trendingKey: [],
};

const gifReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GIF_REQUEST_MORE":
      let currentGifs = state.gifs;
      if (state.endpoint !== payload) {
        currentGifs = [];
      }
      return { ...state, gifs: currentGifs, loading: true, endpoint: payload };
    case "GIF_REQUEST_MORE_SUCCESS":
      console.log("loading success", state.loading);
      return {
        ...state,
        gifs: [...state.gifs, ...payload.data],
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
    case "SORT_REQUEST":
      return { ...state, loading: true };
    case "SORT_REQUEST_SUCCESS":
      let sortGifs = state.gifs.sort(function (a, b) {
        return new Date(b.import_datetime) - new Date(a.import_datetime);
      });
      return { ...state, gifs: sortGifs, loading: false };
    case "SORT_REQUEST_FAIL":
      return { ...state, error: payload, loading: false };
    case "TRENDING_KEY_REQUEST":
      return { ...state, loading: true };
    case "TRENDING_KEY_SUCCESS":
      return { ...state, trendingKey: payload, loading: false };
    case "TRENDING_KEY_FAIL":
      return { ...state, error: payload, loading: false };
    /* case "SEARCH_KEY_REQUEST":
      return { ...state, loading: true };
    case "SEARCH_KEY_SUCCESS":
      let seachTerm = payload;
      let filterGifs = state.gifs.filter((g) =>
        g.title.toLowerCase().includes(seachTerm.toLowerCase())
      );
      return { ...state, gifs: filterGifs };
    case "SEARCH_KEY_FAIL":
      return { ...state, error: payload, loading: false }; */

    default:
      return state;
  }
};

export default gifReducer;
