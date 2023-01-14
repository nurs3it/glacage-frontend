import { Grid } from "@mui/material";

import Card, { CardSkeleton } from "./Card";

import { useCategories } from "hooks/useCategories";

const Catalog = () => {
  const { categories, loading } = useCategories(true);

  return (
    <Grid container>
      {loading ? (
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
          {categories.map((c) => (
            <Card key={c.id} id={c.id} category={c.attributes} />
          ))}
        </>
      )}
    </Grid>
  );
};

export default Catalog;
