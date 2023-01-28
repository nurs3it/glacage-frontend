import classes from "./index.module.css";
import IIcon from "components/UI/IIcon";
import BigLogo from "assets/svg/bigLogo.svg";
import { CircularProgress } from "@mui/material";

const GlobalLoader = () => {
  return (
    <div className={classes.root}>
      <IIcon size={220} icon={BigLogo} />
      <CircularProgress color="primary" />
    </div>
  );
};

export default GlobalLoader;
