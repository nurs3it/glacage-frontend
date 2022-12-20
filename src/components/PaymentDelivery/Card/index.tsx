import { FC } from "react";

import { Props } from "./types";

import classes from "./index.module.css";

import IIcon from "components/UI/IIcon";

import { Grid, Typography } from "@mui/material";

const Card: FC<Props> = ({ icon, title, children }) => {
  return (
    <Grid item className={classes.root} xs={12} md={6}>
      <div className={classes.card}>
        <div className={classes.icon}>
          <IIcon icon={icon} />
        </div>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        {children}
      </div>
    </Grid>
  );
};

export default Card;
