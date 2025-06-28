import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home.jsx";
import LostAndFound from "./pages/LostAndFound.jsx";
import DoctorTalk from "./pages/DoctorTalk.jsx";
import KidsSchool from "./pages/KidsSchool.jsx";
import HobbyHub from "./pages/HobbyHub.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/hobbyhub',
        element: <HobbyHub />
      },
      {
        path: '/lostandfound',
        element: <LostAndFound />
      },
      {
        path: '/doctortalk',
        element: <DoctorTalk />
      },
      {
        path: '/kidsschool',
        element: <KidsSchool />
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
