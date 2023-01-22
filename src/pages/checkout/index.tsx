import AppLayout from "layouts/app";
import IContainer from "layouts/container";

import { useBreakpoints } from "hooks/useBreakpoints";
import { useCart } from "hooks/useCart";

import { Typography } from "@mui/material";

import classes from "./index.module.css";

import CheckoutForm from "components/CheckoutForm";
import { Navigate } from "react-router-dom";

const TITLE = "Оформление заказа";

const CheckoutPage = () => {
  const { mobile } = useBreakpoints();

  const { cart } = useCart();

  if (cart && cart.length === 0) {
    return <Navigate to="/basket" />;
  }

  return (
    <AppLayout pageTitle={TITLE}>
      <IContainer>
        {!mobile && (
          <Typography className={classes.title} variant="h4">
            {TITLE}
          </Typography>
        )}
        <CheckoutForm />
      </IContainer>
    </AppLayout>
  );
};

export default CheckoutPage;
