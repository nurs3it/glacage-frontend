import classes from "./index.module.css";

import { useBreakpoints } from "hooks/useBreakpoints";
import { useNavigate } from "react-router";

import Carousel from "components/Carousel";
import IIcon from "components/UI/IIcon";
import IButton from "components/UI/IButton";

import { Chip, IconButton, Skeleton, Typography } from "@mui/material";

import Close from "assets/svg/close.svg";
import Shop from "assets/svg/shoppingCartWhite.svg";
import { useParams } from "react-router-dom";
import { useProduct } from "hooks/useProduct";
import { useMemo } from "react";
import { BASE_URL } from "src/api";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { mobile } = useBreakpoints();

  const { id } = useParams();

  const { product, loading } = useProduct(id);

  const carouselImages = useMemo(() => {
    return (
      product.attributes?.images?.data?.map(
        (p) => `${BASE_URL}${p.attributes.formats.thumbnail.url}`
      ) || []
    );
  }, [product]);

  const handleToBack = () => {
    navigate(-1);
  };

  if (loading) return <ProductDetailsSkeleton />;

  return (
    <div className={`${classes.root} ${mobile && classes.mRoot}`}>
      <div className={`${classes.gallery} ${mobile && classes.fullWidth}`}>
        {mobile && (
          <IconButton className={classes.close} onClick={handleToBack}>
            <IIcon size={14} icon={Close} />
          </IconButton>
        )}
        <Carousel images={carouselImages} />
      </div>
      <div className={`${classes.info} ${mobile && classes.fullWidth}`}>
        <Typography className={classes.title} variant="h6">
          {product.attributes?.name || ""}
        </Typography>
        <Typography className={classes.subtitle} variant="subtitle1">
          {product.attributes?.description || ""}
        </Typography>
        <Typography className={classes.count} variant="subtitle1">
          1000гр.
        </Typography>
        <Chip
          size="small"
          className={classes.chip}
          label={`В наличии ${product.attributes?.count || 0}шт.`}
        />
        <Typography className={classes.description} variant="body2">
          {product.attributes?.description || ""}
        </Typography>
        <Typography className={classes.price} variant="h6">
          {product.attributes?.price || 0}₸
        </Typography>
        <IButton
          className={classes.button}
          fullWidth={mobile}
          startIcon={<IIcon icon={Shop} />}
        >
          Добавить в корзину
        </IButton>
      </div>
    </div>
  );
};

export const ProductDetailsSkeleton = () => {
  const { mobile } = useBreakpoints();

  return (
    <div className={`${classes.root} ${mobile && classes.mRoot}`}>
      <div className={`${classes.gallery} ${mobile && classes.fullWidth}`}>
        <Carousel images={[""]} />
      </div>
      <div className={`${classes.info} ${mobile && classes.fullWidth}`}>
        <Skeleton width="50%">
          <Typography variant="h6">.</Typography>
        </Skeleton>
        <Skeleton width="30%">
          <Typography variant="subtitle2">.</Typography>
        </Skeleton>
        <Skeleton width="20%">
          <Typography variant="subtitle2">.</Typography>
        </Skeleton>
        <Skeleton width="40%">
          <Typography variant="h3">.</Typography>
        </Skeleton>
        <Skeleton width="60%">
          <Typography variant="body1">.</Typography>
          <Typography variant="body1">.</Typography>
          <Typography variant="body1">.</Typography>
          <Typography variant="body1">.</Typography>
          <Typography variant="body1">.</Typography>
        </Skeleton>
        <Skeleton width={mobile ? "100%" : "50%"}>
          <Typography variant="h1">.</Typography>
        </Skeleton>
      </div>
    </div>
  );
};

export default ProductDetails;
