import { Grid, IconButton, Skeleton, Typography } from "@mui/material";

import classes from "./index.module.css";

import Add from "assets/svg/addFilled.svg";

import IIcon from "components/UI/IIcon";
import ProgressiveImage from "components/UI/ProgressiveImage";

import { Props } from "components/Catalog/Product/types";

import { useNavigate } from "react-router";
import { useCart } from "hooks/useCart";

import { FC, useEffect, useState } from "react";
import ILoading from "components/UI/ILoading";
import CounterInput from "components/CounterInput";
import { ProductInCart } from "types/body";

const Product: FC<Props> = ({ product, id }) => {
  const navigate = useNavigate();
  const { cart, addProduct, changeCount } = useCart();

  const [hasProductInCart, setHasProductInCart] = useState<boolean>(false);
  const [productInCart, setProductInCart] = useState<ProductInCart>(
    {} as ProductInCart
  );
  const [loading, setLoading] = useState(false);

  const handleClickToProduct = () => {
    navigate(`/product/${id}`);
  };

  const addToCart = () => {
    setLoading(true);
    addProduct({
      id,
      stock: product,
    });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    setHasProductInCart(
      cart.some((e) => {
        if (e.id === Number(id)) {
          setProductInCart(e);
        }
        return e.id === Number(id);
      })
    );
  }, [cart, id]);

  return (
    <Grid className={classes.root} item xs={6} md={4} sm={6}>
      <div className={classes.wrapper}>
        <div className={classes.imageWrapper} onClick={handleClickToProduct}>
          <ProgressiveImage
            className={classes.image}
            image={product.images.data[0]}
          />
        </div>
        <div className={classes.info}>
          <Typography className={classes.title} variant="h6">
            {product.name}
          </Typography>
          <Typography className={classes.subtitle} variant="subtitle1">
            {product.shortDescription || " "}
          </Typography>
        </div>
        <div className={classes.action}>
          <Typography className={classes.price} variant="h6">
            {product.price}₸
          </Typography>
          {!hasProductInCart && (
            <IconButton onClick={addToCart} size="small">
              <IIcon icon={Add} />
            </IconButton>
          )}
          {loading && hasProductInCart && (
            <IconButton onClick={addToCart} size="small">
              <ILoading dark />
            </IconButton>
          )}
          {!loading &&
            hasProductInCart &&
            productInCart &&
            productInCart.count && (
              <CounterInput
                isMini
                count={productInCart?.count || 0}
                onChangeCount={(count) => changeCount(id, count)}
              />
            )}
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
