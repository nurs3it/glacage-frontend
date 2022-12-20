import classes from "./index.module.css";

import IContainer from "layouts/container";

import { Typography } from "@mui/material";

import PhoneButton from "components/PhoneButton";
import SocialLinkButtons from "components/SocialLinkButtons";

const Footer = () => {
  return (
    <footer className={classes.root}>
      <IContainer>
        <div className={classes.wrapper}>
          <Typography className={classes.title} variant="h6">
            Контакты
          </Typography>
          <PhoneButton />
          <Typography className={classes.title} variant="h6">
            Социальные сети
          </Typography>
          <SocialLinkButtons />
        </div>
      </IContainer>
    </footer>
  );
};

export default Footer;
