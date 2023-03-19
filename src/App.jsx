import Canteens from "./Components/Canteen/Canteens";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
