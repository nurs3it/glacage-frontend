import { IconButton, Typography } from "@mui/material";

import IIcon from "components/UI/IIcon";

import WhatsApp from "assets/svg/whatsApp.svg";

import classes from "./index.module.css";

import { useContacts } from "hooks/useContacts";

import { openWhatsApp } from "src/utils";

const PhoneButton = () => {
  const { number } = useContacts();

  const handleOpen = () => openWhatsApp(number);

  return (
    <div className={classes.root} onClick={handleOpen}>
      <IconButton>
        <IIcon icon={WhatsApp} />
      </IconButton>
      <Typography className={classes.text} variant="body2">
        {number}
      </Typography>
    </div>
  );
};

export default PhoneButton;
