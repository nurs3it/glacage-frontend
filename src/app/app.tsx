import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const MainPage = lazy(() => import("pages/main"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};
