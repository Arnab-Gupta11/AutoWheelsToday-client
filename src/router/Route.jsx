import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import UpdateProducts from "../pages/UpdateProducts/UpdateProducts";
import AddProduct from "../pages/AddProduct/AddProduct";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MyCart from "../pages/MyCart/MyCart";
import PrivateRoute from "./PrivateRoute";
const createdRoute = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/carts/",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        // loader: ({ params }) => {
        //   return console.log(params.email);
        //   // return fetch(`https://brand-new-website-server.vercel.app/carts/${params.email}`);
        // },
      },
      {
        path: "/brands/:name",
        element: <Products></Products>,
        loader: ({ params }) => fetch(`https://brand-new-website-server.vercel.app/brands/${params.name}`),
      },
      {
        path: "/brands/:name/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          console.log();
          return fetch(`https://brand-new-website-server.vercel.app/brands/${params.name}/${params.id}`);
        },
      },
      {
        path: "/brands/update/:name/:id",
        element: (
          <PrivateRoute>
            <UpdateProducts></UpdateProducts>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://brand-new-website-server.vercel.app/brands/${params.name}/${params.id}`),
      },
    ],
  },
]);

export default createdRoute;
