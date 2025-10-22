import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import BaseLayout from "./components/BaseLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><BaseLayout /><Home /></>,
    },
    {},
    {},
    {},
    {},
    {},
  ]);

  return <>
  {/* For React Routing */}
  <RouterProvider router={router} />
  </>;
}

export default App;
