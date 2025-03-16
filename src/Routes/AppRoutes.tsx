import { Route, Routes } from "react-router-dom";
import { ArrayConcepts } from "../Body/ContentPages/DSA/ArrayConecpts";
import { DSARoadmap } from "../Body/ContentPages/DSA/DSARoadmap";
import { SystemDesignRoadmap } from "../Body/ContentPages/SD/SytemDesignRoadmap";
import { UrlShortenerDesign } from "../Body/ContentPages/SD/UrlShortenerDesign";
import { HomePage } from "../Body/Home";
import { DSA } from "../DSA";
import { SystemDesign } from "../SystemDesign";
import { ROUTES } from "./Routes.const";
import { NotFound } from "../NotFound";
import { ASampleSystemBlogs } from "../Body/ContentPages/SD/ASampleSystemBlogs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path={ROUTES.DSA} element={<DSA />}>
        <Route index element={<DSARoadmap />} />
        <Route path={ROUTES.Array} element={<ArrayConcepts />} />
      </Route>
      <Route path={ROUTES.SystemDesign} element={<SystemDesign />}>
        <Route index element={<SystemDesignRoadmap />} />
        <Route path={ROUTES.UrlShortner} element={<UrlShortenerDesign />} />
        <Route path={ROUTES.TinyUrl} element={<ASampleSystemBlogs />} />
      </Route>
      {/* 404 Page - Catch-all route for unknown paths */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
