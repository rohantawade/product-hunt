import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductState";
import { CommentPopup } from "./CommentPopup";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@material-ui/core";

export const Product = ({ product }) => {
  const { fetchProductComments, comments, storeProductLike } = useContext(
    ProductContext
  );
  const [viewComments, setviewComments] = useState(false);

  const productClickHandler = () => {
    fetchProductComments(product.id);
    setviewComments(true);
  };

  const popupCloseHandler = () => {
    setviewComments(false);
    console.log("view popup : " + viewComments);
  };

  const productLikeHandler = () => {
    console.log("like clicked");
    storeProductLike({ prod_name: product.name, updatedOn: new Date() });
  };

  return (
    <>
      <ListItem button onClick={productClickHandler} value={product.id}>
        <ListItemAvatar>
          <Avatar src={product.thumbnail.image_url} width="96" height="96" />
        </ListItemAvatar>
        <ListItemText primary={product.name} secondary={product.tagline} />
        <button onClick={productLikeHandler}>Like</button>
      </ListItem>
      <CommentPopup
        visible={viewComments}
        onClose={popupCloseHandler}
        comments={comments}
        title={product.name}
      />
    </>
  );
};
