// Import Create Browser Router
import { RouterProvider } from "react-router-dom";

// Import Router from router.tsx
import Router from "./router/Router";

// Import Loader Context
import { useLoading } from "./hooks/useLoader";

// Import Loader
import Loader from "./components/shared/Loader";

//Import react toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * The main App component that serves as the entry point for the React application.
 * It provides routing capabilities using `RouterProvider` from `react-router-dom`.
 * Additionally, it displays a `Loader` component when the `loading` state is `true`.
 * @returns TSX to render the application.
 */

function App() {
  // Access the loading state from the LoaderContext using the `useLoading` hook
  const { loading } = useLoading();

  // Render the application
  return (
    <>
      {/* Display the `Loader` component when `loading` is `true` */}
      {loading && <Loader />}

      {/* Create the `ToastContainer` component that is required for react-toastify to work */}
      <ToastContainer />

      {/* Provide routing capabilities using `RouterProvider` */}
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
