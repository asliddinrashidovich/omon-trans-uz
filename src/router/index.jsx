import { Route, Routes } from "react-router-dom";

import NotFoundPage from "../components/not-found-page";
import MainLayout from "../layout/main-layout";
import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import ServicesPage from "../pages/services";
import BlogPage from "../pages/blog";
import AvtoParkPage from "../pages/avtoPark";
import ServiceOnePage from "../pages/servicesInfo/servicesInfo";
import BlogInfoPage from "../pages/blogInfo/blogInfoPage";

export default function MyRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:id" element={<ServiceOnePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogInfoPage />} />
        <Route path="/avtopark" element={<AvtoParkPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
