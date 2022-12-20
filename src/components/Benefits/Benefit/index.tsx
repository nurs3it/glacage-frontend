import { FC } from "react";

import classes from "./index.module.css";

import { Grid, Typography } from "@mui/material";

import IIcon from "components/UI/IIcon";

import { Props } from "./types";

const Benefit: FC<Props> = ({ icon, title }) => {
  return (
    <Grid item className={classes.root} xs={6} sm={6}>
      <div className={classes.icon}>
        <IIcon icon={icon} />
      </div>

      <Typography variant="h6" className={classes.title}>
        {title}
      </Typography>
    </Grid>
  );
};

export default Benefit;
