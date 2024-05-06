import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../components/Pages/Home";
import Registration from "../components/Pages/Registration";
import Login from "../components/Pages/Login";
import Cart from "../components/Pages/Cart";
import ErrorPage from "../components/Pages/ErrorPage";
import PrivateRoute from "../components/PrivateRoute/PrivateRouteCart";
import BrandProducts from "../components/Pages/BrandProducts";
import ProductDetails from "../components/Pages/ProductDetails";
import UpdateProduct from "../components/Pages/UpdateProduct";
import AddProduct from "../components/Pages/pageComponents/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/brands/:brand",
        element: <BrandProducts></BrandProducts>,
      },
      {
        path: "/brands/product/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/brands/updateproduct/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-gamma-six.vercel.app/brands/product/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
