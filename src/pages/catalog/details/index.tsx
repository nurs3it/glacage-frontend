import AppLayout from "layouts/app";
import IContainer from "layouts/container";

import { Grid, Skeleton, Typography } from "@mui/material";

import classes from "./index.module.css";

import { useBreakpoints } from "hooks/useBreakpoints";
import { useProducts } from "hooks/useProducts";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Product, { ProductSkeleton } from "components/Catalog/Product";

const DetailsPage = () => {
  const { mobile } = useBreakpoints();
  const { id } = useParams();

  const { products, getByCategoryId, loading, category, error } = useProducts();

  useEffect(() => {
    getByCategoryId(id);
  }, [getByCategoryId, id]);

  return (
    <AppLayout pageTitle={category?.data?.attributes?.name || ""}>
      <IContainer>
        {!mobile &&
          (category?.data?.attributes?.name ? (
            <Typography className={classes.title} variant="h4">
              {category?.data?.attributes?.name || ""}
            </Typography>
          ) : (
            <Skeleton animation="wave" sx={{ margin: "0 auto" }} width="40%">
              <Typography variant="h3">.</Typography>
            </Skeleton>
          ))}
        <Grid container>
          {loading || error ? (
            <>
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
            </>
          ) : (
            <>
              {products.map((p) => (
                <Product key={p.id} id={p.id} product={p.attributes} />
              ))}
            </>
          )}
        </Grid>
      </IContainer>
    </AppLayout>
  );
};

export default DetailsPage;
