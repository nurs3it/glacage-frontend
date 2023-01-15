import { Grid, IconButton, Skeleton, Typography } from "@mui/material";

import classes from "./index.module.css";

import ProductImage from "assets/image/product.png";
import Add from "assets/svg/addFilled.svg";

import IIcon from "components/UI/IIcon";
import { Props } from "components/Catalog/Product/types";

import { useNavigate } from "react-router";

import { FC } from "react";
import { BASE_URL } from "src/api";

const Product: FC<Props> = ({ product }) => {
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
            src={
              `${BASE_URL}${product.images.data[0].attributes.formats.thumbnail.url}` ||
              ProductImage
            }
            alt="product image"
          />
        </div>
        <div className={classes.info}>
          <Typography className={classes.title} variant="h6">
            {product.name}
          </Typography>
          <Typography className={classes.subtitle} variant="subtitle1">
            {product.description}
          </Typography>
        </div>
        <div className={classes.action}>
          <Typography className={classes.price} variant="h6">
            {product.price}₸
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
