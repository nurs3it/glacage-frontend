import { Grid, Skeleton, Typography } from "@mui/material";

import classes from "./index.module.css";

import { useNavigate } from "react-router";
import { FC } from "react";

import { Props } from "components/Catalog/Card/types";
import ProgressiveImage from "components/UI/ProgressiveImage";

const Card: FC<Props> = ({ category, id }) => {
  const navigate = useNavigate();
  const handleClickCatalog = () => navigate(`/catalog/${id}`);
  return (
    <Grid className={classes.root} item xs={12} md={4} sm={6}>
      <div className={classes.wrapper} onClick={handleClickCatalog}>
        <ProgressiveImage
          className={classes.image}
          image={category.background.data}
        />
        <div className={classes.action}>
          <Typography variant="h6" className={classes.title}>
            {category.name}
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            перейти в раздел
          </Typography>
        </div>
      </div>
    </Grid>
  );
};

export const CardSkeleton = () => {
  return (
    <Grid className={classes.root} item xs={12} md={4} sm={6}>
      <div className={classes.wrapper}>
        <Skeleton
          sx={{ height: "100%", width: "100%" }}
          animation="wave"
          variant="rectangular"
        />
        <div className={classes.action}>
          <Skeleton animation="wave" sx={{ margin: "0 auto" }} width="50%">
            <Typography variant="h4">.</Typography>
          </Skeleton>
          <Skeleton animation="wave" sx={{ margin: "0 auto" }} width="30%">
            <Typography>.</Typography>
          </Skeleton>
        </div>
      </div>
    </Grid>
  );
};
export default Card;
