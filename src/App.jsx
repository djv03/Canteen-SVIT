import Canteens from "./Components/Canteen/Canteens";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Canteens />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
