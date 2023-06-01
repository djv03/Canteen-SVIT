import Canteens from "./Components/Canteen/Canteens";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";

import PurnimaMenu from "./pages/Canteens-Pages/Purnima";
import FeeFaFooMenu from "./pages/Canteens-Pages/FeeFaFoo";
import NescafeMenu from "./pages/Canteens-Pages/NesCafe";

// routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Canteens />, // main canteens page
      },
      // specific canteen route
      {
        path: "purnima",
        element: <PurnimaMenu />,
      },
      {
        path: "fee-fa-foo",
        element: <FeeFaFooMenu />,
      },
      {
        path: "nescafe",
        element: <NescafeMenu />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
