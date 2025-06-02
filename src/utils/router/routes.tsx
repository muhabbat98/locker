import { createBrowserRouter } from "react-router";
import App from "@/App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <div>Hello World</div>,
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
      {
        path: "/location",
        element: <div>Location</div>,
      },
      {
        path: "/pricing",
        element: <div>Pricing</div>,
      },
      {
        path: "/faq",
        element: <div>FAQ</div>,
      },
      {
        path: "/contact",
        element: <div>Contact</div>,
      },
    ],
  },
]);
