import { IconButton, Typography } from "@mui/material";

import IIcon from "components/UI/IIcon";

import WhatsApp from "assets/svg/whatsApp.svg";

import classes from "./index.module.css";

const PhoneButton = () => {
  return (
    <div className={classes.root}>
      <IconButton>
        <IIcon icon={WhatsApp} />
      </IconButton>
      <Typography className={classes.text} variant="body2">
        (704) 555-0127
      </Typography>
    </div>
  );
};

export default PhoneButton;
