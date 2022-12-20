import { configureStore } from "@reduxjs/toolkit";

import about from "./about.store";
export default configureStore({
  reducer: {
    about,
  },
});
