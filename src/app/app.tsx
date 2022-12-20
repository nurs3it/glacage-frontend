import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const MainPage = lazy(() => import("pages/main"));
const CatalogPage = lazy(() => import("pages/catalog"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/catalog" element={<CatalogPage />} />
    </Routes>
  );
};
