import { useEffect, useState } from "react";
import axios from "axios";
import { DirectMessages } from "../common";
import { useLoading } from "./useLoader";

/**
 * Custom hook for fetching direct messages.
 *
 * @returns {{
 *   dm: DirectMessages[] ;
 * }}
 */
const useDirectMessages = (): { dm: DirectMessages[] } => {
  // State to store direct messages data
  const [dm, setDm] = useState<DirectMessages[]>([]);

  // Loading state management using the useLoading hook
  const { setLoading } = useLoading();

  /**
   * Fetches server data from the API.
   *
   * @async
   */
  const fetchDms = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/dms");
      if (response.data) {
        setDm(response.data.directMessages);
      }
    } catch (error) {
      console.error("Error fetching server data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch server data on component mount
  useEffect(() => {
    fetchDms();
  }, []);

  return { dm };
};

export default useDirectMessages;
