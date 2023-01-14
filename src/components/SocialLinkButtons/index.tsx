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

import { useContacts } from "hooks/useContacts";

import { openLink } from "src/utils";

const SocialLinkButtons: FC<{ dark?: boolean }> = ({ dark }) => {
  const { instagram, facebook, twitter } = useContacts();

  const handleOpenLink = (link: string) => openLink(link);

  return (
    <div className={classes.root}>
      {facebook && (
        <IconButton
          className={classes.link}
          onClick={() => handleOpenLink(facebook)}
        >
          <IIcon icon={dark ? Facebook2 : Facebook} />
        </IconButton>
      )}
      {instagram && (
        <IconButton
          className={classes.link}
          onClick={() => handleOpenLink(instagram)}
        >
          <IIcon icon={dark ? Instagram2 : Instagram} />
        </IconButton>
      )}
      {twitter && (
        <IconButton
          className={classes.link}
          onClick={() => handleOpenLink(twitter)}
        >
          <IIcon icon={dark ? Twitter2 : Twitter} />
        </IconButton>
      )}
    </div>
  );
};

export default SocialLinkButtons;
