import { useEffect, useState } from "react";
import axios from "axios";
import { User } from "../common";
import { useLoading } from "./useLoader";

/**
 * Custom hook for fetching server data.
 *
 * @returns {{
 *   user: User | undefined ;
 * }}
 */
const useUser = (): { user: User | undefined } => {
  // State to store user data
  const [user, setUser] = useState<User | undefined>();
  // Loading state management using the useLoading hook
  const { setLoading } = useLoading();

  /**
   * Fetches server data from the API.
   *
   * @async
   */
  const fetchUser = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/user");
      if (response.data && response.data.user) {
        setUser(response.data.user);
      }
    } catch (error) {
      console.error("Error fetching server data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch server data on component mount
  useEffect(() => {
    fetchUser();
  }, []);

  return { user };
};

export default useUser;
