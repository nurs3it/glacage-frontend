import AppLayout from "layouts/app";
import IContainer from "layouts/container";

import { Typography } from "@mui/material";

import classes from "./index.module.css";

import { useBreakpoints } from "hooks/useBreakpoints";

import CartProduct from "components/Catalog/CartProduct";
import IButton from "components/UI/IButton";

const BasketPage = () => {
  const { mobile } = useBreakpoints();
  return (
    <AppLayout pageTitle="Корзина">
      <IContainer>
        {!mobile && (
          <Typography className={classes.title} variant="h4">
            Корзина
          </Typography>
        )}
        <CartProduct />
        <CartProduct />
        <CartProduct isLast />
        <div className={classes.action}>
          <IButton className={classes.button} fullWidth={mobile}>
            Отправить заказ
          </IButton>
        </div>
      </IContainer>
    </AppLayout>
  );
};

export default BasketPage;
