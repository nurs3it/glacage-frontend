import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";

const MainPage = lazy(() => import("pages/main"));
const CatalogPage = lazy(() => import("pages/catalog"));
const CatalogDetailsPage = lazy(() => import("pages/catalog/details"));
const ProductPage = lazy(() => import("pages/product"));
const BasketPage = lazy(() => import("pages/basket"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/catalog/:id" element={<CatalogDetailsPage />} />
      <Route path="/product" element={<Navigate to="/catalog" />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/basket" element={<BasketPage />} />
    </Routes>
  );
};
