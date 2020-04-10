import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";

export const Comment = ({ comment }) => {
  return (
    <>
      <ListItem key={comment.id}>
        <ListItemAvatar>
          <Avatar src={comment.user.image_url["30px"]} width="96" height="96" />
        </ListItemAvatar>
        <ListItemText
          primary={comment.user.username}
          secondary={comment.body}
        />
      </ListItem>
    </>
  );
};
