import { ADD_ARTICLE, DELETE_ARTICLE } from "./actions-types";

export const addArticle = (payload) => {
  return {
    type: ADD_ARTICLE,
    payload,
  };
};

export const deleteArticle = (payload) => {
  return {
    type: DELETE_ARTICLE,
    payload,
  };
};
