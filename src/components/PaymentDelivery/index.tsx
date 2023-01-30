import { Grid, Skeleton, Typography } from "@mui/material";

import Card from "./Card";

import Cart from "assets/svg/cart.svg";
import Car from "assets/svg/car.svg";

import ReactMarkdown from "react-markdown";

import { useAboutInfo } from "hooks/useAboutInfo";
import classes from "components/About/index.module.css";

const TypographySkeleton = () => {
  return (
    <>
      <Skeleton width="100%">
        <Typography className={classes.skeletonText}>.</Typography>
      </Skeleton>
      <Skeleton width="100%">
        <Typography className={classes.skeletonText}>.</Typography>
      </Skeleton>
      <Skeleton width="30%">
        <Typography className={classes.skeletonText}>.</Typography>
      </Skeleton>
      <Skeleton width="100%">
        <Typography className={classes.skeletonText}>.</Typography>
      </Skeleton>
      <Skeleton width="100%">
        <Typography className={classes.skeletonText}>.</Typography>
      </Skeleton>
      <Skeleton width="30%">
        <Typography className={classes.skeletonText}>.</Typography>
      </Skeleton>
    </>
  );
};

const PaymentDelivery = () => {
  const { about } = useAboutInfo();
  return (
    <Grid container>
      <Card icon={Cart} title="Оплата">
        {about.payment && (
          <Typography>
            <ReactMarkdown>{about.payment}</ReactMarkdown>
          </Typography>
        )}
        {!about.payment && <TypographySkeleton />}
      </Card>
      <Card icon={Car} title="Доставка">
        {about.delivery && (
          <Typography>
            <ReactMarkdown>{about.delivery}</ReactMarkdown>
          </Typography>
        )}
        {!about.delivery && <TypographySkeleton />}
      </Card>
    </Grid>
  );
};

export default PaymentDelivery;
