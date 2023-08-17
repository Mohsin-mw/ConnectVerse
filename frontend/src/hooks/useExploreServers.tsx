import { useEffect, useState } from "react";
import axios from "axios";
import { ExploreServer } from "../common";
import { useLoading } from "./useLoader";

/**
 * Custom hook for fetching servers.
 *
 * @returns {{
 *   servers: ExploreServer[] ;
 * }}
 */
const useExploreServers = (): { servers: ExploreServer[] } => {
  // State to store servers data
  const [servers, setServers] = useState<ExploreServer[]>([]);

  // Loading state management using the useLoading hook
  const { setLoading } = useLoading();

  /**
   * Fetches servers data from the API.
   *
   * @async
   */
  const fetchServers = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/explore");
      if (response.data) {
        setServers(response.data);
      }
    } catch (error) {
      console.error("Error fetching server data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch servers data on component mount
  useEffect(() => {
    fetchServers();
  }, []);

  return { servers };
};

export default useExploreServers;
