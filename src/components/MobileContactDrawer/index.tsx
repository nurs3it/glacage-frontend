import classes from "./index.module.css";

import { Typography } from "@mui/material";

import IList from "components/UI/IList";

import ContactDrawerMenus from "components/ContactDrawerMenus";

const MobileContactDrawer = () => {
  return (
    <div className={classes.root}>
      <div className={classes.puller} />
      <div className={classes.content}>
        <Typography align="center" variant="body2">
          Как вам удобнее с нами связаться?
        </Typography>
        <IList>
          <ContactDrawerMenus />
        </IList>
      </div>
    </div>
  );
};

export default MobileContactDrawer;
