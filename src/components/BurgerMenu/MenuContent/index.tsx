import { FC } from "react";

import classes from "./index.module.css";

import { Grid, IconButton } from "@mui/material";

import IIcon from "components/UI/IIcon";

import Close from "assets/svg/close.svg";
import Cart from "assets/svg/shoppingCart.svg";
import Carousel from "assets/svg/carousel.svg";
import Information from "assets/svg/information.svg";
import Trophy from "assets/svg/trophy.svg";
import Car from "assets/svg/car.svg";
import CreditCart from "assets/svg/cart.svg";

import { Props } from "./types";

import IList, { Item } from "components/UI/IList";
import PhoneButton from "components/PhoneButton";
import SocialLinkButtons from "components/SocialLinkButtons";

import { useNavigate } from "react-router";

const MenuContent: FC<Props> = ({ onClose }) => {
  const navigate = useNavigate();
  const goTo = (hash: string) => {
    window.location.href = `/#${hash}`;
    onClose();
  };

  const goToBasket = () => {
    navigate("/basket");
    onClose();
  };

  return (
    <Grid container className={classes.root} flexDirection="row">
      <Grid className={classes.close} item>
        <IconButton onClick={onClose}>
          <IIcon size={12} icon={Close} />
        </IconButton>
      </Grid>

      <IList>
        <Item onClick={goToBasket} icon={Cart} text="Корзина" />
        <Item icon={Carousel} text="Каталог" />
      </IList>

      <IList title="Интересно">
        <Item onClick={() => goTo("about")} icon={Information} text="О нас" />
        <Item
          onClick={() => goTo("benefits")}
          icon={Trophy}
          text="Наши преимущества"
        />
      </IList>

      <IList title="Полезно">
        <Item
          onClick={() => goTo("payment")}
          icon={Car}
          secondIcon={CreditCart}
          text="Оплата и Доставка"
        />
      </IList>

      <IList title="Контакты">
        <div className={classes.container}>
          <PhoneButton />
        </div>
      </IList>

      <IList title="Социальные сети">
        <div className={classes.container}>
          <SocialLinkButtons dark />
        </div>
      </IList>
    </Grid>
  );
};

export default MenuContent;
