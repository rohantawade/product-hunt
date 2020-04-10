import React, { useReducer, createContext } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  comments: [],
};

const requestHeader = {
  headers: {
    Authorization: "Bearer -qitbCWyekF19aGAXBReZRYOa0ybddLG_VWEETHhZj4",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  method: "GET",
};

export const CommentsContext = createContext(initialState);

export const CommentsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function fetchProductComments(postId) {
    fetch(
      `https://api.producthunt.com/v1/posts/${postId}/comments`,
      requestHeader
    )
      .then((result) => result.json())
      .then((post) => {
        dispatch({
          type: "FETCH_PRODUCT_COMMENTS",
          payload: post.comments,
        });
      });
  }

  return (
    <CommentsContext.Provider
      value={{ fetchProductComments, comments: state.comments }}
    >
      {children}
    </CommentsContext.Provider>
  );
};
