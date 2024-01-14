import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import GlobalStyles from "./styles/GlobalStyles";
import RootLayout from "./ui/RootLayout";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";
import Favourites from "./pages/Favourites";
import Settings from "./pages/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/favourites",
        element: <Favourites />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools buttonPosition="bottom-left" />
      <GlobalStyles />
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#fff",
            fontWeight: 500,
          },
          success: {
            duration: 3000,
            style: {
              border: "2px solid var(--color-teal-500)",
              color: "var(--color-gray-600)",
            },
          },
          error: {
            duration: 3000,
            style: {
              border: "2px solid var(--color-red-600)",
              color: "var(--color-gray-600)",
            },
          },
        }}
      />
    </QueryClientProvider>
  );
}
