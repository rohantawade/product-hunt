import React from "react";
import { Dialog, DialogTitle, DialogContent, List } from "@material-ui/core";
import { Comment } from "./Comment";

export const CommentPopup = (props) => {
  return (
    <Dialog
      onClose={props.onClose}
      open={props.visible}
      style={{ minWidth: 900, minHeight: 500 }}
    >
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent dividers>
        <List>
          {props.comments.map((comment) => {
            return <Comment key={comment.id} comment={comment} />;
          })}
        </List>
      </DialogContent>
    </Dialog>
  );
};
