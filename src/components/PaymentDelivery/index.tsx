import { Grid, Typography } from "@mui/material";

import Card from "./Card";

import Cart from "assets/svg/cart.svg";
import Car from "assets/svg/car.svg";

import ReactMarkdown from "react-markdown";

import { useAboutInfo } from "hooks/useAboutInfo";

const PaymentDelivery = () => {
  const { about } = useAboutInfo();
  return (
    <Grid container>
      <Card icon={Cart} title="Оплата">
        <Typography>
          <ReactMarkdown>{about.payment}</ReactMarkdown>
        </Typography>
      </Card>
      <Card icon={Car} title="Доставка">
        <Typography>
          <ReactMarkdown>{about.delivery}</ReactMarkdown>
        </Typography>
      </Card>
    </Grid>
  );
};

export default PaymentDelivery;
