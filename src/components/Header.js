import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductState";
import { timeDifference } from "../Util/TimeDiffCalculator";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemText,
  Link,
} from "@material-ui/core";

export const Header = () => {
  const { activities } = useContext(ProductContext);
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Link
        href="#"
        underline="always"
        onClick={() => setOpen(activities && activities.length > 0)}
      >
        View activities
      </Link>
      <Dialog
        onClose={() => setOpen(false)}
        open={open}
        style={{ minWidth: 500, minHeight: 400 }}
      >
        <DialogTitle>Recent activities</DialogTitle>
        <DialogContent dividers>
          <List>
            {activities.map((activity, i) => (
              <ListItem key={i}>
                <ListItemText
                  primary={`Liked ${activity.prod_name} ${timeDifference(
                    new Date(),
                    activity.updatedOn
                  )}`}
                />
              </ListItem>
            ))}
          </List>
        </DialogContent>
      </Dialog>
    </div>
  );
};
