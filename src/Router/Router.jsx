import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Homepage/Home";
import Products from "../Components/Products/Products";
import About from "../Components/About/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home></Home> 
      ),
    },
    {
      path: "/product",
      element: <Products></Products>
    },

    {
        path: "/about",
        element: <About></About>
      },
  ]);

  export default router;