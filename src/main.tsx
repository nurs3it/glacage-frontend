import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";

import { App } from "app/app";

import "styles/global.css";

import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";
import theme from "styles/mui";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Suspense fallback={<></>}>
      <CssBaseline />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </Suspense>
  </React.StrictMode>
);
