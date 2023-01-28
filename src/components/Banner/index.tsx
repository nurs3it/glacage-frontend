import classes from "./index.module.css";

import BannerPhoto from "assets/image/banner.png";
import Logo from "assets/svg/bigLogo.svg";

import { Typography } from "@mui/material";

import { useAboutInfo } from "hooks/useAboutInfo";

const Banner = () => {
  const { about } = useAboutInfo();
  return (
    <div
      className={classes.root}
      style={{ backgroundImage: `url(${BannerPhoto})` }}
    >
      <img
        draggable={false}
        className={classes.logo}
        src={Logo}
        alt="big logo"
      />
      <Typography className={classes.description} variant="body1">
        {about.title || ""}
      </Typography>
    </div>
  );
};

export default Banner;
