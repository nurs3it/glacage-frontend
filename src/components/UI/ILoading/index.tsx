import classes from "./index.module.css";
import IIcon from "components/UI/IIcon";
import Loa from "assets/svg/loa.svg";
import LoaDark from "assets/svg/loaDark.svg";

const ILoading = ({ size = 24, dark = false }) => {
  return (
    <div style={{ width: size, height: size }} className={classes.root}>
      <IIcon size={size} icon={dark ? LoaDark : Loa} />
    </div>
  );
};

export default ILoading;
