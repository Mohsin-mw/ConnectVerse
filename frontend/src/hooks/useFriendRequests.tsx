import { useEffect, useState } from "react";
import axios from "axios";
import { FriendRequest } from "../common";
import { useLoading } from "./useLoader";

/**
 * Custom hook for fetching friendRequests.
 *
 * @returns {{
 *   friends: Friend[] ;
 * }}
 */
const useFriendRequests = (): { friendRequests: FriendRequest[] } => {
  // State to store friendRequests data
  const [friendRequests, setFriendRequests] = useState<FriendRequest[]>([]);

  // Loading state management using the useLoading hook
  const { setLoading } = useLoading();

  /**
   * Fetches server data from the API.
   *
   * @async
   */
  const fetchFriendRequests = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/friend-requests");
      if (response.data) {
        setFriendRequests(response.data.friendRequests);
      }
    } catch (error) {
      console.error("Error fetching server data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch server data on component mount
  useEffect(() => {
    fetchFriendRequests();
  }, []);

  return { friendRequests };
};

export default useFriendRequests;
