import { useContext } from "react";

import { LoaderContext, LoaderContextType } from "../context/LoaderProvider";

// Export the custom Hook useLoading
export function useLoading(): LoaderContextType {
  // Consume the LoaderContext within a functional component using the useContext Hook
  const context = useContext(LoaderContext);

  // If the context is not found, throw an error as useLoading must be used within LoadingProvider
  if (!context) {
    throw new Error("useLoading must be used within LoadingProvider");
  }

  // Return the loading state and the setLoading function
  return context;
}
