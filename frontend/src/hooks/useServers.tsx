import { useEffect, useState } from "react";
import axios from "axios";
import { Servers } from "../common";
import { useLoading } from "./useLoader";

/**
 * Custom hook for fetching server data.
 *
 * @returns {{
 *   servers: Servers[] ;
 * }}
 */
const useServers = (): { servers: Servers[] } => {
  // State to store server data
  const [servers, setServers] = useState<Servers[]>([]);

  // Loading state management using the useLoading hook
  const { setLoading } = useLoading();

  /**
   * Fetches server data from the API.
   *
   * @async
   */
  const fetchServers = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/movies");
      if (response.data) {
        setServers(response.data.navigation);
      }
    } catch (error) {
      console.error("Error fetching server data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch server data on component mount
  useEffect(() => {
    fetchServers();
  }, []);

  return { servers };
};

export default useServers;
