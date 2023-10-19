import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Products from "../pages/Products/Products";
const createdRoute = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://brand-new-website-server.vercel.app/brands"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/brands/:name",
        element: <Products></Products>,
        loader: ({ params }) => {
          console.log();
          return fetch(`https://brand-new-website-server.vercel.app/${params.name}`);
        },
      },
    ],
  },
]);

export default createdRoute;
