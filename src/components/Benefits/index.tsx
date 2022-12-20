import classes from "./index.module.css";

import Benefit from "./Benefit";

import Gift from "assets/svg/gift.svg";
import Apple from "assets/svg/apple.svg";
import Tree from "assets/svg/decisionTree.svg";
import Users from "assets/svg/users.svg";

import { Grid } from "@mui/material";

const Benefits = () => {
  return (
    <Grid container className={classes.root} spacing={0}>
      <Benefit icon={Gift} title="Подарочная упаковка" />
      <Benefit icon={Apple} title="Свежие продукты" />
      <Benefit icon={Tree} title="Собственное производство" />
      <Benefit icon={Users} title="Ручная работа" />
    </Grid>
  );
};

export default Benefits;
