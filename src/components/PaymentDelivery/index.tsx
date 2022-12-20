import { Grid } from "@mui/material";

import Card from "./Card";

import Cart from "assets/svg/cart.svg";
import Car from "assets/svg/car.svg";

const PaymentDelivery = () => {
  return (
    <Grid container>
      <Card icon={Cart} title="Оплата">
        Для оформления заказа необходимо выбрать в нашем каталоге понравившийся
        товар, указать количество и произвести оплату.
        <br />
        <br />
        Минимальная сумма заказа должна быть не менее 1400 руб.Оплата возможна
        банковской картой после оформления заказа на сайте в соответствии с
        правилами оплаты платежными картами.
      </Card>
      <Card icon={Car} title="Доставка">
        Доставка по городу осуществляется курьером или такси. Стоимость доставки
        — 350 руб. Возможен бесплатный самовывоз из кондитерской.
        <br />
        <br />
        Доставка осуществляется в следующие районы города: Центральный,
        Петроградский, Выборгский, Василеостровский, Приморский.
      </Card>
    </Grid>
  );
};

export default PaymentDelivery;
