import PageNotFount from "../pages/404";
import Details from "../pages/details";
import Explore from "../pages/explore";
import Home from "../pages/home";
import SearchResult from "../pages/searchResult";

export const ROUTES = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/:mediaType/:id",
    Component: Details,
  },
  {
    path: "/search/:query",
    Component: SearchResult,
  },
  {
    path: "/explore/:mediaType",
    Component: Explore,
  },
  {
    path: "/*",
    Component: PageNotFount,
  },
];
