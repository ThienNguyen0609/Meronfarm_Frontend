import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Home from "./Home/Home";
import Container from "./Container";
import Body from "./Body/Body";
import HomePage from "../components/HomePage/HomePage";
import Search from "../components/Search/Search";
import AboutUs from "../components/AboutUs/AboutUs";
import Customer from "../components/Customer/Customer";
import Policy from "../components/Policy/Policy";
import Cart from "../components/Cart/Cart";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Detail from "../components/Detail/Detail";
import AdminPage from "../components/Admin/AdminPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Container />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <Body />,
            children: [
              {
                path: "/",
                element: <HomePage />
              },
              {
                path: "search/",
                element: <Search />
              },
              {
                path: "about-us/",
                element: <AboutUs />
              },
              {
                path: "customer/:service",
                element: <Customer />,
              },
              {
                path: "policy/",
                element: <Policy />
              },
              {
                path: "cart-details/",
                element: <Cart />
              },
              {
                path: "product/detail",
                element: <Detail />
              },
              {
                path: "admin/:page",
                element: <AdminPage />
              }
            ]
          }
        ]
      },
      {
        path: "login/",
        element: <Login />
      },
      {
        path: "register/",
        element: <Register />
      }
    ]
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
