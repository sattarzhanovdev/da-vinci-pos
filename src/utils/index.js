import { Pages } from "../pages";

export const PUBLIC_ROUTES = [
  {id: 1, path: "/", element: <Pages.Main/>},
  {id: 2, path: "/products/", element: <Pages.AddProducts />},
  {id: 3, path: "/more/", element: <Pages.More />},
  {id: 4, path: "/open/", element: <Pages.OpenOrder />},
  {id: 5, path: "/add/", element: <Pages.Adding />},
  {id: 6, path: "/orders/", element: <Pages.Orders />},
  {id: 7, path: "/check/", element: <Pages.Receipt />},
];