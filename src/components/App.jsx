import Home from "pages/Home";
import MovieById from "pages/MovieById";
import Movies from "pages/Movies";
import { Routes, Route } from "react-router-dom";
// import Cast from "./Cast";
// import Reviews from "./Reviews";
import { lazy } from "react";
import SharedLayout from "./SharedLayout/";

const Cast = lazy(() => import("./Cast"));
const Reviews = lazy(() => import("./Reviews"));

export const App = () => {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Movies/:type/:id" element={<MovieById />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
