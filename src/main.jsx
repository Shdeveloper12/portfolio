import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Ecommers from "./pages/Ecommers.jsx";

// Lazy load page components
const Home = lazy(() => import("./components/Home.jsx"));
const LostAndFound = lazy(() => import("./pages/LostAndFound.jsx"));
const DoctorTalk = lazy(() => import("./pages/DoctorTalk.jsx"));
const KidsSchool = lazy(() => import("./pages/KidsSchool.jsx"));
const HobbyHub = lazy(() => import("./pages/HobbyHub.jsx"));
const EnglishJanala = lazy(() => import("./pages/EnglishJanala.jsx"));
const PetShop = lazy(() => import("./pages/PetShop.jsx"));
const TeaHouse = lazy(() => import("./pages/TeaHouse.jsx"));
const MedicalCamp = lazy(() => import("./pages/MedicalCamp.jsx"));
const Gradient = lazy(() => import("./pages/Gradient.jsx"));

// Loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      
      <span className="loading loading-ring loading-8xl"></span>
    </div>
  </div>
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/herosection",
        
      },
       {
        path: "/ecommers",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Ecommers />
          </Suspense>
        ),
      },
      {
        path: "/mcms",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <MedicalCamp />
          </Suspense>
        ),
      },
      {
        path: '/gradient',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Gradient />
          </Suspense>
        ),
      },
      {
        path: '/hobbyhub',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <HobbyHub />
          </Suspense>
        ),
      },
      {
        path: '/lostandfound',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <LostAndFound />
          </Suspense>
        ),
      },
      {
        path: '/doctortalk',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <DoctorTalk />
          </Suspense>
        ),
      },
      {
        path: '/kidsschool',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <KidsSchool />
          </Suspense>
        ),
      },
      {
        path: '/englishjanala',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <EnglishJanala />
          </Suspense>
        ),
      },
      {
        path: '/petshop',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <PetShop/>
          </Suspense>
        ),
      },
      {
        path: '/teahouse',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <TeaHouse />
          </Suspense>
        ),
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
