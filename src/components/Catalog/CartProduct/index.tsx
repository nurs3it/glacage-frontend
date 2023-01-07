import classes from "./index.module.css";

import Cake from "assets/image/cake.png";
import Close from "assets/svg/closeSilver.svg";

import { IconButton, Typography } from "@mui/material";

import IIcon from "components/UI/IIcon";

import { FC } from "react";

import { Props } from "components/Catalog/CartProduct/types";
import CounterInput from "components/CounterInput";

const CartProduct: FC<Props> = ({ isLast = false }) => {
  return (
    <>
      <div className={`${classes.root} ${!isLast && classes.isLast}`}>
        <div className={classes.imageWrapper}>
          <img className={classes.image} src={Cake} alt="cake" />
        </div>
        <div className={classes.content}>
          <IconButton size="small" className={classes.delete}>
            <IIcon icon={Close} />
          </IconButton>
          <div className={classes.info}>
            <Typography className={classes.title} variant="h6">
              Ягодный чизкейк
            </Typography>
            <Typography className={classes.subtitle} variant="subtitle2">
              Муссовое пирожное
            </Typography>
          </div>
          <div className={classes.action}>
            <Typography className={classes.price} variant="h6">
              0000₸
            </Typography>
            <CounterInput />
          </div>
        </div>
      </div>

      {isLast && (
        <div className={classes.allPrice}>
          <Typography variant="h6">ИТОГО</Typography>
          <Typography className={classes.price} variant="h6">
            0000₸
          </Typography>
        </div>
      )}
    </>
  );
};

export default CartProduct;
