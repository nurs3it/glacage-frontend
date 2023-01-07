import classes from "./index.module.css";

import Logo from "assets/svg/inlineLogo.svg";
import Cart from "assets/svg/shoppingCart.svg";
import ArrowLeft from "assets/svg/arrowLeft.svg";

import { Menu } from "../../constants";

import { IconButton, Typography, Grid } from "@mui/material";

import { useNavigate } from "react-router";
import { useBreakpoints } from "hooks/useBreakpoints";
import { FC } from "react";
import { useLocation } from "react-router-dom";

import IIcon from "components/UI/IIcon";
import BurgerMenu from "components/BurgerMenu";
import PhoneButton from "components/PhoneButton";

import { Props } from "./types";

const Navbar: FC<Props> = ({ pageTitle = "" }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { desktop, mobile } = useBreakpoints();

  const goBack = () => navigate(-1);

  const goToHash = (hash) => {
    window.location.href = `/#${hash}`;
  };

  const isMainPage = pathname === "/";

  if (mobile && !isMainPage) {
    return (
      <Grid
        container
        className={`${classes.appBar} ${!desktop && classes.appBarPadding} ${
          !desktop && classes.divider
        }`}
        alignItems="center"
      >
        <IconButton onClick={goBack}>
          <IIcon size={18} icon={ArrowLeft} />
        </IconButton>
        <Typography variant="subtitle2">{pageTitle}</Typography>
        <BurgerMenu />
      </Grid>
    );
  }

  return (
    <Grid
      container
      className={`${classes.appBar} ${!desktop && classes.appBarPadding} ${
        !desktop && classes.divider
      }`}
      alignItems="center"
    >
      <img
        draggable={"false"}
        onClick={() => navigate("/")}
        height={21}
        src={Logo}
        alt="glacage inline logo"
      />
      {desktop && (
        <Grid item alignItems="center">
          <ul className={classes.links}>
            {Menu.map((link) => (
              <li className={classes.link} key={link.id}>
                <Typography
                  className={classes.linkText}
                  variant="body2"
                  onClick={() => goToHash(link.link)}
                >
                  {link.title}
                </Typography>
              </li>
            ))}
          </ul>
        </Grid>
      )}
      {desktop && (
        <Grid item alignItems="center">
          <PhoneButton />
        </Grid>
      )}
      <Grid item alignItems="center">
        <IconButton>
          <IIcon icon={Cart} />
        </IconButton>
        {!desktop && <BurgerMenu />}
      </Grid>
    </Grid>
  );
};

export default Navbar;
