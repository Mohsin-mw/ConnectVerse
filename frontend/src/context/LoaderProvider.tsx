// Import required modules from the React library
import { createContext, useState } from "react";

// Create a new Context object with an initial value

export interface LoaderContextType {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoaderContext = createContext<LoaderContextType>({
  loading: false,
  setLoading: () => {},
});

// Export the LoadingProvider component
export function LoadingProvider({ children }: { children: React.ReactNode }) {
  // Use the useState Hook to define a loading state variable and its updater function
  const [loading, setLoading] = useState(false);

  // Create an object with the loading state and the setLoading function
  const value = { loading, setLoading };

  // Provide the value to the LoaderContext using the LoaderContext.Provider
  return (
    <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>
  );
}
