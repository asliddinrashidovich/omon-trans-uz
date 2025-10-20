import { Route, Routes } from "react-router-dom";

import NotFoundPage from "../components/not-found-page";
import MainLayout from "../layout/main-layout";
import HomePage from "../pages/home";

export default function MyRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
