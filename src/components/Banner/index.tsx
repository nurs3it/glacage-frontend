import classes from "./index.module.css";

import BannerPhoto from "assets/image/banner.png";
import Logo from "assets/svg/bigLogo.svg";
import { Typography } from "@mui/material";

const Banner = () => {
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
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </Typography>
    </div>
  );
};

export default Banner;
