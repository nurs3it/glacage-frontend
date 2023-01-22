import AppLayout from "layouts/app";
import IContainer from "layouts/container";

import { useBreakpoints } from "hooks/useBreakpoints";

import { Typography } from "@mui/material";

import classes from "./index.module.css";

import CheckoutForm from "components/CheckoutForm";

const TITLE = "Оформление заказа";

const CheckoutPage = () => {
  const { mobile } = useBreakpoints();

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
