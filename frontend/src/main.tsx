import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Import Loader Context Provider
import { LoadingProvider } from "./context/LoaderProvider.tsx";

/**
 * Entry point of the application.
 *
 * This code initializes the React application by rendering the root component within the specified DOM element.
 * It wraps the <App /> component with a <LoadingProvider /> to provide loading state management using context.
 *
 * @function
 * @returns {void}
 */

import { Server } from "./Server";
import { UserProvider } from "./context/UserProvider.tsx";

// Server();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* Wrap the App component with LoadingProvider for loading state management */}
    <LoadingProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </LoadingProvider>
  </React.StrictMode>
);
