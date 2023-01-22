import classes from "./index.module.css";
import IIcon from "components/UI/IIcon";
import Loa from "assets/svg/loa.svg";

const ILoading = ({ size = 24 }) => {
  return (
    <div style={{ width: size, height: size }} className={classes.root}>
      <IIcon size={size} icon={Loa} />
    </div>
  );
};

export default ILoading;
