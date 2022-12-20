import { List, Typography } from "@mui/material";

import { Props } from "components/UI/IList/types";

import Item from "./Item";

import { FC } from "react";

import classes from "./index.module.css";

const IList: FC<Props> = ({ children, title = "" }) => {
  return (
    <List className={classes.root}>
      {title && (
        <Typography className={classes.title} variant="subtitle1">
          {title}
        </Typography>
      )}
      {children}
    </List>
  );
};

export { Item };

export default IList;
