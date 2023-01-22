import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import classes from "./index.module.css";

import {
  Grid,
  TextField,
  MenuItem,
  InputLabel,
  IconButton,
  Stack,
  Chip,
  FormHelperText,
  Typography,
} from "@mui/material";

import IButton from "components/UI/IButton";
import IIcon from "components/UI/IIcon";
import ILoading from "components/UI/ILoading";

import Location from "assets/svg/location.svg";
import Map from "assets/svg/map.svg";
import Information from "assets/svg/informationFilled.svg";
import Checkmark from "assets/svg/checkmarkFilled.svg";

import { DeliveryTypes } from "src/constants";

import { useAddresses } from "hooks/useAddresses";
import { useTimesForOrder } from "hooks/useTimesForOrder";
import { useBreakpoints } from "hooks/useBreakpoints";
import { useCart } from "hooks/useCart";
import { useRequest } from "ahooks";

import { createOrder } from "api/order";

const CheckoutForm = () => {
  const [deliveryType, setDeliveryType] = useState("PICKUP");
  const [timeForOrder, setTimeForOrder] = useState("");
  const [loader, setLoader] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [pickUpAddress] = useState();

  const { handleSubmit, register, setValue } = useForm();

  const { addresses } = useAddresses();
  const { times } = useTimesForOrder();
  const { mobile } = useBreakpoints();
  const { totalPrice, cart, resetCart } = useCart();

  const createOrderService = useRequest(createOrder, {
    onBefore: () => {
      setLoader(true);
    },
    onSuccess: (r) => {
      setIsSuccess(true);
      if (r) {
        setTimeout(() => {
          setLoader(false);
          setIsSuccess(false);
        }, 2000);
      }
    },
    onError: () => {
      setIsSuccess(false);
      setTimeout(() => {
        setLoader(false);
        setIsSuccess(false);
        resetCart();
      }, 2000);
    },
    manual: true,
  });

  const onSubmit = (values) => {
    const totalCheckout = {
      ...values,
      date: new Date(values.date),
      summa: totalPrice,
      products: cart.map((p) => ({
        id: p.id,
        attributes: p.stock,
      })),
    };

    createOrderService.runAsync({ data: totalCheckout }).then((r) => {
      console.log(r);
    });
  };

  useEffect(() => {
    setValue("deliveryType", "PICKUP");
  }, [setValue]);

  useEffect(() => {
    if (!timeForOrder && times.length > 0) {
      setValue(
        "time",
        `${times[0]?.attributes?.startTime} - ${times[0].attributes.endTime}`
      );
      setTimeForOrder(
        `${times[0].attributes.startTime} - ${times[0].attributes.endTime}`
      );
    }
  }, [setValue, timeForOrder, times]);

  useEffect(() => {
    setValue("address", "");
  }, [setValue, deliveryType]);

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      {loader && (
        <div className={classes.loader}>
          {!isSuccess ? (
            <>
              <ILoading size={48} />
              <Typography sx={{ marginTop: "24px" }} variant="caption">
                Пожалуйста, подождите...
              </Typography>
            </>
          ) : (
            <>
              <IIcon icon={Checkmark} />
              <Typography sx={{ marginTop: "24px" }} variant="caption">
                Заказ успешно оформлен:)
              </Typography>
            </>
          )}
        </div>
      )}
      <Grid className={classes.fieldGroup} container>
        <Grid className={classes.fieldItem} item xs={12} md={4} sm={6}>
          <InputLabel id="firstname">Имя*</InputLabel>
          <TextField
            type="text"
            placeholder="Введите имя"
            fullWidth
            className={classes.input}
            id="firstname"
            variant="outlined"
            {...register("firstname", {
              required: true,
            })}
          />
        </Grid>
        <Grid className={classes.fieldItem} item xs={12} md={4} sm={6}>
          <InputLabel id="secondname">Фамилия</InputLabel>
          <TextField
            type="text"
            fullWidth
            placeholder="Введите фамилию"
            className={classes.input}
            id="secondname"
            variant="outlined"
            {...register("secondname", {
              required: false,
            })}
          />
        </Grid>
        <Grid className={classes.fieldItem} item xs={12} md={4} sm={6}>
          <InputLabel id="email">Email</InputLabel>
          <TextField
            type="email"
            fullWidth
            className={classes.input}
            placeholder="Введите email"
            id="email"
            variant="outlined"
            {...register("email", {
              required: false,
            })}
          />
        </Grid>
      </Grid>
      <Grid className={classes.fieldGroup} container>
        <Grid className={classes.fieldItem} item xs={12} md={4} sm={6}>
          <InputLabel id="phone">Мобильный номер*</InputLabel>
          <TextField
            type="text"
            fullWidth
            className={classes.input}
            id="phone"
            placeholder="Введите мобильный номер"
            variant="outlined"
            {...register("phone", {
              required: true,
            })}
          />
        </Grid>
        <Grid className={classes.fieldItem} item xs={12} md={4} sm={6}>
          <InputLabel id="date">Дата получения заказа*</InputLabel>
          <TextField
            fullWidth
            className={classes.input}
            id="date"
            type="date"
            defaultValue={new Date()}
            placeholder="Введите дату заказа"
            InputLabelProps={{
              shrink: true,
            }}
            {...register("date", {
              required: true,
            })}
          />
          <FormHelperText className={classes.dateHelperText} filled id="date">
            <IIcon size={18} icon={Information} />
            Дата получения заказа
          </FormHelperText>
        </Grid>
      </Grid>
      <Grid className={classes.fieldGroup} container>
        <Grid className={classes.fieldItem} item xs={12} md={8} sm={8}>
          <div className={classes.deliveryTypes}>
            {DeliveryTypes.map((t) => (
              <div
                onClick={() => {
                  setDeliveryType(t.type);
                  setValue("deliveryType", t.type);
                }}
                className={`${classes.deliveryType} ${
                  deliveryType === t.type && classes.activeDeliveryType
                }`}
                key={t.type}
              >
                {t.label}
              </div>
            ))}
          </div>
        </Grid>
      </Grid>
      <Grid className={classes.fieldGroup} container>
        <Grid className={classes.fieldItem} item xs={12} md={8} sm={8}>
          {deliveryType === "PICKUP" && (
            <>
              <InputLabel id="pickUpAddress">Адрес самовывоз</InputLabel>
              <TextField
                fullWidth
                select
                className={classes.input}
                value={pickUpAddress}
                variant="outlined"
                placeholder="Выберите адрес"
                onChange={(event) => {
                  setValue("address", event.target.value);
                }}
                {...register("address", {
                  required: deliveryType === "PICKUP",
                })}
                InputProps={{
                  startAdornment: (
                    <IIcon
                      size={24}
                      className={classes.selectIcon}
                      icon={Location}
                    />
                  ),
                }}
              >
                {addresses.map((a) => (
                  <MenuItem key={a.id} value={a.attributes.address}>
                    {a.attributes.address}
                  </MenuItem>
                ))}
              </TextField>
            </>
          )}
          {deliveryType === "DELIVERY" && (
            <>
              <InputLabel id="deliveryAddress">Адрес доставки</InputLabel>
              <TextField
                type="text"
                placeholder="Введите адрес"
                fullWidth
                className={classes.input}
                id="deliveryAddress"
                variant="outlined"
                {...register("address", {
                  required: deliveryType === "DELIVERY",
                })}
                InputProps={{
                  startAdornment: (
                    <IconButton>
                      <IIcon icon={Location} />
                    </IconButton>
                  ),
                  endAdornment: (
                    <IconButton>
                      <IIcon icon={Map} />
                    </IconButton>
                  ),
                }}
              />
            </>
          )}
        </Grid>
      </Grid>
      {times && times.length > 0 && (
        <Grid className={classes.fieldGroup} container>
          <Grid
            className={`${classes.fieldItem} ${classes.times}`}
            item
            xs={12}
            md={8}
            sm={8}
          >
            <Stack direction="row" spacing={1}>
              {times.map((t) => (
                <Chip
                  key={t.id}
                  clickable
                  label={`${t.attributes.startTime.substr(
                    0,
                    t.attributes.startTime.length - 3
                  )} - ${t.attributes.endTime.substr(
                    0,
                    t.attributes.endTime.length - 3
                  )}`}
                  color={
                    `${t.attributes.startTime} - ${t.attributes.endTime}` ===
                    timeForOrder
                      ? "primary"
                      : "secondary"
                  }
                  onClick={() => {
                    setValue(
                      "time",
                      `${t.attributes.startTime} - ${t.attributes.endTime}`
                    );
                    setTimeForOrder(
                      `${t.attributes.startTime} - ${t.attributes.endTime}`
                    );
                  }}
                />
              ))}
            </Stack>
          </Grid>
        </Grid>
      )}
      <Grid className={classes.fieldGroup} container>
        <Grid className={classes.fieldItem} item xs={12} md={8} sm={8}>
          <InputLabel id="comment">Комментарий для заказа</InputLabel>
          <TextField
            multiline
            rows={3}
            type="text"
            fullWidth
            className={classes.input}
            id="comment"
            placeholder="Введите комментарий для заказа"
            variant="outlined"
            {...register("comment", {
              required: false,
            })}
          />
        </Grid>
      </Grid>
      <Grid className={classes.fieldGroup} container>
        <Grid className={classes.fieldItem} item xs={12} md={8} sm={8}>
          <InputLabel id="promocode">Промокод</InputLabel>
          <TextField
            type="text"
            fullWidth
            className={classes.input}
            id="promocode"
            placeholder="Введите промокод"
            variant="outlined"
            {...register("promocode", {
              required: false,
            })}
          />
        </Grid>
      </Grid>
      <Grid className={`${classes.action} ${mobile && classes.padding}`}>
        <IButton fullWidth={mobile} type="submit" size="large">
          Оформить заказ
        </IButton>
      </Grid>
    </form>
  );
};

export default CheckoutForm;
