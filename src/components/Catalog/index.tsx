import { Grid } from "@mui/material";

import Card, { CardSkeleton } from "./Card";

import { useCategories } from "hooks/useCategories";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";

import IButton from "components/UI/IButton";

import classes from "./index.module.css";

const Catalog = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { categories, loading, error, categoriesMeta } = useCategories(true);

  const goToCategories = () => navigate("/catalog");

  return (
    <Grid container>
      {loading || error ? (
        <>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </>
      ) : (
        <>
          {categories.slice(0, 6).map((c) => (
            <Card key={c.id} id={c.id} category={c.attributes} />
          ))}

          {pathname === "/" &&
            categoriesMeta.pagination &&
            categoriesMeta.pagination.total > 6 && (
              <IButton
                onClick={goToCategories}
                className={classes.button}
                variant="text"
              >
                Показать еще
              </IButton>
            )}
        </>
      )}
    </Grid>
  );
};

export default Catalog;
