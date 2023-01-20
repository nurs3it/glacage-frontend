import AppLayout from "layouts/app";
import IContainer from "layouts/container";

import { Typography } from "@mui/material";

import classes from "./index.module.css";

import { useBreakpoints } from "hooks/useBreakpoints";
import { useCart } from "hooks/useCart";
import { useNavigate } from "react-router";

import CartProduct from "components/Catalog/CartProduct";
import IButton from "components/UI/IButton";

const BasketPage = () => {
  const navigate = useNavigate();

  const { cart } = useCart();
  const { mobile } = useBreakpoints();

  const goToCatalog = () => navigate("/catalog");

  const cartIsEmpty = cart && cart.length === 0;

  return (
    <AppLayout pageTitle="Корзина">
      <IContainer>
        {!mobile && !cartIsEmpty && (
          <Typography className={classes.title} variant="h4">
            Корзина
          </Typography>
        )}
        {!cartIsEmpty &&
          cart.map((p, i, a) => (
            <CartProduct
              product={p.stock || p.attributes}
              id={p.id}
              key={i}
              count={p.count}
              isLast={a.length === i + 1}
            />
          ))}
        {cartIsEmpty && (
          <div className={classes.empty}>
            <Typography align="center" className={classes.title} variant="h4">
              Корзина пуста ¯\(°_o)/¯
            </Typography>
            <IButton
              className={classes.button}
              fullWidth={mobile}
              onClick={goToCatalog}
            >
              Перейти в каталог
            </IButton>
          </div>
        )}
        {!cartIsEmpty && (
          <div className={classes.action}>
            <IButton className={classes.button} fullWidth={mobile}>
              Отправить заказ
            </IButton>
          </div>
        )}
      </IContainer>
    </AppLayout>
  );
};

export default BasketPage;
