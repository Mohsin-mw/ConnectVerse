import { useEffect, useState } from "react";
import axios from "axios";
import { Friend } from "../common";
import { useLoading } from "./useLoader";

/**
 * Custom hook for fetching friends.
 *
 * @returns {{
 *   friends: Friend[] ;
 * }}
 */
const useFriends = (): { friends: Friend[] } => {
  // State to store friends data
  const [friends, setFriends] = useState<Friend[]>([]);

  // Loading state management using the useLoading hook
  const { setLoading } = useLoading();

  /**
   * Fetches server data from the API.
   *
   * @async
   */
  const fetchFriends = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/friends");
      if (response.data) {
        setFriends(response.data.friends);
      }
    } catch (error) {
      console.error("Error fetching server data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch server data on component mount
  useEffect(() => {
    fetchFriends();
  }, []);

  return { friends };
};

export default useFriends;
