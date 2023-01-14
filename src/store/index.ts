import { configureStore } from "@reduxjs/toolkit";

import about from "./about.store";
import categories from "./categories.store";

export default configureStore({
  reducer: {
    about,
    categories,
  },
});
