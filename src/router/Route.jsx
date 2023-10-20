import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import UpdateProducts from "../pages/UpdateProducts/UpdateProducts";
import AddProduct from "../pages/AddProduct/AddProduct";
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
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/brands/:name",
        element: <Products></Products>,
        loader: ({ params }) => fetch(`https://brand-new-website-server.vercel.app/brands/${params.name}`),
      },
      {
        path: "/brands/:name/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) => {
          console.log();
          return fetch(`https://brand-new-website-server.vercel.app/brands/${params.name}/${params.id}`);
        },
      },
      {
        path: "/brands/update/:name/:id",
        element: <UpdateProducts></UpdateProducts>,
        loader: ({ params }) => fetch(`https://brand-new-website-server.vercel.app/brands/${params.name}/${params.id}`),
      },
    ],
  },
]);

export default createdRoute;
