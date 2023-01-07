import AppLayout from "layouts/app";
import IContainer from "layouts/container";

import { Grid, Typography } from "@mui/material";

import classes from "./index.module.css";

import { useBreakpoints } from "hooks/useBreakpoints";

import Product from "components/Catalog/Product";

const DetailsPage = () => {
  const { mobile } = useBreakpoints();
  return (
    <AppLayout pageTitle="Эклеры">
      <IContainer>
        {!mobile && (
          <Typography className={classes.title} variant="h4">
            Тарталетки
          </Typography>
        )}
        <Grid container>
          <Product />
          <Product />
          <Product />
          <Product />
        </Grid>
      </IContainer>
    </AppLayout>
  );
};

export default DetailsPage;
