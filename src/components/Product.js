import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductState";
import { CommentPopup } from "./CommentPopup";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@material-ui/core";
import { CommentsContext } from "../context/CommentState";

export const Product = ({ product }) => {
  const { storeProductLike } = useContext(ProductContext);
  const { fetchProductComments, comments } = useContext(CommentsContext);
  const [viewComments, setviewComments] = useState(false);

  const productClickHandler = () => {
    fetchProductComments(product.id);
    setviewComments(true);
  };

  const popupCloseHandler = () => {
    setviewComments(false);
  };

  const productLikeHandler = (e) => {
    storeProductLike({ prod_name: product.name, updatedOn: new Date() });
    e.stopPropagation();
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
        visible={viewComments && comments && comments.length > 0}
        onClose={popupCloseHandler}
        comments={comments}
        title={product.name}
      />
    </>
  );
};
