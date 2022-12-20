import { FC } from "react";

import { Props } from "components/Block/types";

import { Typography } from "@mui/material";

import classes from "./index.module.css";

const Block: FC<Props> = ({ title = "", children, id = "" }) => {
  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h4">
        {title}
      </Typography>
      {children}
    </div>
  );
};

export default Block;
