import { configureStore } from "@reduxjs/toolkit";

import about from "./about.store";
import categories from "./categories.store";
import products from "./products.store";
import cart from "./cart.store";
import addresses from "./addresses.store";
import timesForOrder from "./times.store";

export default configureStore({
  reducer: {
    about,
    categories,
    products,
    cart,
    addresses,
    timesForOrder,
  },
});
