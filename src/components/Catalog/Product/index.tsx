import { Grid, IconButton, Skeleton, Typography } from "@mui/material";

import classes from "./index.module.css";

import ProductImage from "assets/image/product.png";
import Add from "assets/svg/addFilled.svg";

import IIcon from "components/UI/IIcon";

import { useNavigate } from "react-router";

const Product = () => {
  const navigate = useNavigate();

  const handleClickToProduct = () => {
    navigate("/product/1");
  };

  return (
    <Grid className={classes.root} item xs={6} md={4} sm={6}>
      <div className={classes.wrapper} onClick={handleClickToProduct}>
        <div className={classes.imageWrapper}>
          <img
            draggable={false}
            className={classes.image}
            width={100}
            src={ProductImage}
            alt="product image"
          />
        </div>
        <div className={classes.info}>
          <Typography className={classes.title} variant="h6">
            Эклеры
          </Typography>
          <Typography className={classes.subtitle} variant="subtitle1">
            Муссовое пирожное
          </Typography>
        </div>
        <div className={classes.action}>
          <Typography className={classes.price} variant="h6">
            0000₸
          </Typography>
          <IconButton size="small">
            <IIcon icon={Add} />
          </IconButton>
        </div>
      </div>
    </Grid>
  );
};

export const ProductSkeleton = () => {
  return (
    <Grid className={classes.root} item xs={6} md={4} sm={6}>
      <div className={classes.wrapper}>
        <div className={classes.imageWrapper}>
          <Skeleton
            sx={{ height: "100%", width: "100%" }}
            animation="wave"
            variant="rectangular"
          />
        </div>
        <div className={classes.info}>
          <Skeleton animation="wave" width="50%">
            <Typography variant="h6">.</Typography>
          </Skeleton>
          <Skeleton animation="wave" width="40%">
            <Typography variant="subtitle1">.</Typography>
          </Skeleton>
        </div>
        <div className={classes.action}>
          <Skeleton animation="wave" width="30%">
            <Typography variant="h6">.</Typography>
          </Skeleton>
        </div>
      </div>
    </Grid>
  );
};

export default Product;
