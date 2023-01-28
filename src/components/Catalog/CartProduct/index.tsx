import classes from "./index.module.css";
import Close from "assets/svg/closeSilver.svg";

import { IconButton, Typography } from "@mui/material";

import { FC } from "react";

import { Props } from "components/Catalog/CartProduct/types";

import CounterInput from "components/CounterInput";
import ProgressiveImage from "components/UI/ProgressiveImage";
import IIcon from "components/UI/IIcon";

import { useCart } from "hooks/useCart";
import { useNavigate } from "react-router";

const CartProduct: FC<Props> = ({ product, id, count, isLast = false }) => {
  const navigate = useNavigate();
  const { removeProduct, changeCount, totalPrice } = useCart();

  const goToProduct = () => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <div className={`${classes.root} ${!isLast && classes.isLast}`}>
        <div className={classes.imageWrapper} onClick={goToProduct}>
          {product && product.images && product.images.data[0] && (
            <ProgressiveImage
              className={classes.image}
              image={product.images.data[0]}
            />
          )}
        </div>
        <div className={classes.content}>
          <IconButton
            size="small"
            className={classes.delete}
            onClick={() => removeProduct(id)}
          >
            <IIcon icon={Close} />
          </IconButton>
          <div className={classes.info}>
            <Typography className={classes.title} variant="h6">
              {product?.name || ""}
            </Typography>
            <Typography className={classes.subtitle} variant="subtitle2">
              {product?.shortDescription || ""}
            </Typography>
          </div>
          <div className={classes.action}>
            <Typography className={classes.price} variant="h6">
              {product?.price || 0}₸
            </Typography>
            <CounterInput
              count={count}
              onChangeCount={(count) => changeCount(id, count)}
            />
          </div>
        </div>
      </div>

      {isLast && (
        <div className={classes.allPrice}>
          <Typography variant="h6">ИТОГО</Typography>
          <Typography className={classes.price} variant="h6">
            {totalPrice}₸
          </Typography>
        </div>
      )}
    </>
  );
};

export default CartProduct;
