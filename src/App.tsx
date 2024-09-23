import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Profile from "./routes/Profile";
import Home from "./routes/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>,
      },
      {
        path: "profile",
        element: <Profile/>,
      },
    ]
  }
]);

function App() {
  return <>
    <RouterProvider router={router}/>
  </>;
}

export default App
