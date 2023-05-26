import { ADD_ARTICLE } from "../actions/basket/actions-types";

const initialState = {
  articles: [],
  count: 0,
};

const basketReducer = (state = initialState, action) => {
  if (action.type === ADD_ARTICLE) {
    state.articles = [...state.articles, action.payload];
    state.count++;
  }

  console.log(state);
  return state;
};

export default basketReducer;
