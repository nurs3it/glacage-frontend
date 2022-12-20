import classes from "./index.module.css";
import IIcon from "components/UI/IIcon";
import Loa from "assets/svg/loa.svg";

const ILoading = () => {
  return (
    <div className={classes.root}>
      <IIcon icon={Loa} />
    </div>
  );
};

export default ILoading;
