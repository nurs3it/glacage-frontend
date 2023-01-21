import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import classes from "./index.module.css";

import { Grid, TextField } from "@mui/material";

import IButton from "components/UI/IButton";

import { DeliveryTypes } from "src/constants";

const CheckoutForm = () => {
  const [deliveryType, setDeliveryType] = useState("PICKUP");
  const { handleSubmit, register, setValue } = useForm();

  const onSubmit = (values) => {
    console.log(values);
    // code
  };

  useEffect(() => {
    setValue("deliveryType", "PICKUP");
  }, [setValue]);

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <Grid className={classes.fieldGroup} container>
        <Grid className={classes.fieldItem} item xs={12} md={4} sm={6}>
          <TextField
            type="text"
            fullWidth
            className={classes.input}
            id="firstname"
            label="Имя*"
            variant="outlined"
            {...register("firstname", {
              required: true,
            })}
          />
        </Grid>
        <Grid className={classes.fieldItem} item xs={12} md={4} sm={6}>
          <TextField
            type="text"
            fullWidth
            className={classes.input}
            id="secondname"
            label="Фамилия*"
            variant="outlined"
            {...register("secondname", {
              required: false,
            })}
          />
        </Grid>
        <Grid className={classes.fieldItem} item xs={12} md={4} sm={6}>
          <TextField
            type="email"
            fullWidth
            className={classes.input}
            id="email"
            label="Email*"
            variant="outlined"
            {...register("email", {
              required: false,
            })}
          />
        </Grid>
      </Grid>
      <Grid className={classes.fieldGroup} container>
        <Grid className={classes.fieldItem} item xs={12} md={4} sm={6}>
          <TextField
            type="text"
            fullWidth
            className={classes.input}
            id="phone"
            label="Мобильный номер*"
            variant="outlined"
            {...register("phone", {
              required: true,
            })}
          />
        </Grid>
        <Grid className={classes.fieldItem} item xs={12} md={4} sm={6}>
          <TextField
            fullWidth
            className={classes.input}
            id="date"
            label="Дата получения заказа*"
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
            {...register("date", {
              required: true,
            })}
          />
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
      <Grid className={classes.action}>
        <IButton type="submit" size="large">
          Оформить заказ
        </IButton>
      </Grid>
    </form>
  );
};

export default CheckoutForm;
