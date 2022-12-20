import AppLayout from "layouts/app";
import IContainer from "layouts/container";

import { Typography } from "@mui/material";

import classes from "./index.module.css";

import Catalog from "components/Catalog";

const CatalogPage = () => {
  return (
    <AppLayout>
      <IContainer>
        <Typography className={classes.title} variant="h4">
          Каталог
        </Typography>
        <Catalog />
      </IContainer>
    </AppLayout>
  );
};

export default CatalogPage;
