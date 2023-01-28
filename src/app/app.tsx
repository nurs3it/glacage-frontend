import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, useCallback, useEffect } from "react";

import { useRequest } from "ahooks";

import { useDispatch } from "react-redux";

import { getContacts } from "api/contacts";
import { setContacts } from "store/about.store";

const MainPage = lazy(() => import("pages/main"));
const CatalogPage = lazy(() => import("pages/catalog"));
const CatalogDetailsPage = lazy(() => import("pages/catalog/details"));
const ProductPage = lazy(() => import("pages/product"));
const BasketPage = lazy(() => import("pages/basket"));
const CheckoutPage = lazy(() => import("pages/checkout"));

export const App = () => {
  const dispatch = useDispatch();

  const parseData = (data) => {
    dispatch(setContacts(data));
  };

  const { runAsync } = useRequest(getContacts, {
    manual: true,
    onSuccess: (result) => {
      parseData(result.data.data.attributes);
    },
  });

  const handleGetContacts = useCallback(() => {
    runAsync().then((r) => r);
  }, [runAsync]);

  useEffect(() => {
    handleGetContacts();
  }, [handleGetContacts]);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/catalog/:id" element={<CatalogDetailsPage />} />
      <Route path="/product" element={<Navigate to="/catalog" />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/basket" element={<BasketPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
};
