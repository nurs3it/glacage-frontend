import classes from "./index.module.css";

import { IconButton } from "@mui/material";

import IIcon from "components/UI/IIcon";

import Facebook from "assets/svg/facebook.svg";
import Facebook2 from "assets/svg/facebookFill.svg";
import Instagram from "assets/svg/instagram.svg";
import Instagram2 from "assets/svg/instagramFill.svg";
import Twitter from "assets/svg/twitter.svg";
import Twitter2 from "assets/svg/twitterFill.svg";

import { FC } from "react";

const SocialLinkButtons: FC<{ dark?: boolean }> = ({ dark }) => {
  return (
    <div className={classes.root}>
      <IconButton className={classes.link}>
        <IIcon icon={dark ? Facebook2 : Facebook} />
      </IconButton>
      <IconButton className={classes.link}>
        <IIcon icon={dark ? Instagram2 : Instagram} />
      </IconButton>
      <IconButton className={classes.link}>
        <IIcon icon={dark ? Twitter2 : Twitter} />
      </IconButton>
    </div>
  );
};

export default SocialLinkButtons;
