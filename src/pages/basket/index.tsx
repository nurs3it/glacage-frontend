import AppLayout from "layouts/app";
import IContainer from "layouts/container";

import { Typography } from "@mui/material";

import classes from "./index.module.css";

import { useBreakpoints } from "hooks/useBreakpoints";

import CartProduct from "components/Catalog/CartProduct";

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
      </IContainer>
    </AppLayout>
  );
};

export default BasketPage;
