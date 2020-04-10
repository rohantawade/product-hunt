import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  products: [],
  comments: [],
  activities: [],
};

const requestHeader = {
  headers: {
    Authorization: "Bearer -qitbCWyekF19aGAXBReZRYOa0ybddLG_VWEETHhZj4",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  method: "GET",
};

// create context
export const ProductContext = createContext(initialState);

// provider component
export const ProductHuntProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function filterProducts(selectedDate) {
    fetch(
      `https://api.producthunt.com/v1/posts?days_ago=${selectedDate}`,
      requestHeader
    )
      .then((result) => result.json())
      .then((products) => {
        console.log(products);
        dispatch({
          type: "FETCH_FILTERED_DATA",
          payload: products.posts,
        });
      });
  }

  function fetchProductComments(postId) {
    fetch(
      `https://api.producthunt.com/v1/posts/${postId}/comments`,
      requestHeader
    )
      .then((result) => result.json())
      .then((post) => {
        console.log("comments ", post);
        dispatch({
          type: "FETCH_PRODUCT_COMMENTS",
          payload: post.comments,
        });
      });
  }

  function storeProductLike(activity) {
    dispatch({
      type: "STORE_PRODUCT_LIKE",
      payload: activity,
    });
  }

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        filterProducts,
        fetchProductComments,
        comments: state.comments,
        storeProductLike,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
