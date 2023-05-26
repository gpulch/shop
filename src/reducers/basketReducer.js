import { ADD_ARTICLE, DELETE_ARTICLE } from "../actions/basket/actions-types";

const initialState = {
  articles: [],
};

const basketReducer = (state = initialState, action) => {
  if (action.type === ADD_ARTICLE) {
    return {
      ...state,
      articles: [...state.articles, action.payload],
    };
  }

  if (action.type === DELETE_ARTICLE) {
    const article = state.articles.find(
      (article) => article.id === action.payload
    );

    const newState = { ...state, articles: [...state.articles] };

    if (article) newState.articles.splice(state.articles.indexOf(article), 1);

    return newState;
  }

  return state;
};

export default basketReducer;
