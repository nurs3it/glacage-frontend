import { Grid, Typography } from "@mui/material";

import classes from "./index.module.css";

import Cake from "assets/image/cake.png";

import { useNavigate } from "react-router";

const Card = () => {
  const navigate = useNavigate();
  const handleClickCatalog = (id) => navigate(`/catalog/${id}`);
  return (
    <Grid className={classes.root} item xs={12} md={4} sm={6}>
      <div className={classes.wrapper} onClick={() => handleClickCatalog(1)}>
        <img className={classes.image} src={Cake} alt="cake" />
        <div className={classes.action}>
          <Typography variant="h6" className={classes.title}>
            Тарталетки
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            перейти в раздел
          </Typography>
        </div>
      </div>
    </Grid>
  );
};

export default Card;
