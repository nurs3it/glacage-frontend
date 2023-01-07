import classes from "./index.module.css";

import { useBreakpoints } from "hooks/useBreakpoints";
import { useNavigate } from "react-router";

import Carousel from "components/Carousel";
import IIcon from "components/UI/IIcon";
import IButton from "components/UI/IButton";

import { IconButton, Typography, Chip } from "@mui/material";

import Close from "assets/svg/close.svg";
import Shop from "assets/svg/shoppingCartWhite.svg";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { mobile } = useBreakpoints();

  const handleToBack = () => {
    navigate(-1);
  };

  return (
    <div className={`${classes.root} ${mobile && classes.mRoot}`}>
      <div className={`${classes.gallery} ${mobile && classes.fullWidth}`}>
        {mobile && (
          <IconButton className={classes.close} onClick={handleToBack}>
            <IIcon size={14} icon={Close} />
          </IconButton>
        )}
        <Carousel
          images={[
            "https://cdn.pixabay.com/photo/2016/03/27/19/23/cupcakes-1283821__480.jpg",
            "https://cdn.pixabay.com/photo/2015/09/16/20/10/dough-943245__480.jpg",
            "https://cdn.pixabay.com/photo/2016/03/27/21/59/bread-1284438__480.jpg",
          ]}
        />
      </div>
      <div className={`${classes.info} ${mobile && classes.fullWidth}`}>
        <Typography className={classes.title} variant="h6">
          Эклеры
        </Typography>
        <Typography className={classes.subtitle} variant="subtitle1">
          Муссовое пирожное
        </Typography>
        <Typography className={classes.count} variant="subtitle1">
          1000гр.
        </Typography>
        <Chip size="small" className={classes.chip} label="В наличии 7шт." />
        <Typography className={classes.description} variant="body2">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Typography>
        <Typography className={classes.price} variant="h6">
          0000₸
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

export default ProductDetails;
