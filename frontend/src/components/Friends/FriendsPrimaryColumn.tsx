import { FriendSearch } from "..";
import useFriends from "../../hooks/useFriends";
import FriendCard from "./FriendCard";
import ActiveNow from "./ActiveNow";
import TopBar from "./TopBar";
import axios from "axios";
import { useEffect, useState } from "react";

const FriendsPrimaryColumn = () => {
  // const { friends } = useFriends();

  interface Friends {
    name: string;
    emial: string;
    pic: string;
    status: string;
    user: string;
    _id: string;
  }
  const [friends, setFriends] = useState<Friends[]>([]);

  const fetchFriends = async () => {
    try {
      const { data } = await axios.get(
        import.meta.env.VITE_BACKEND_URL + "/friends/fetchFriends",
        { withCredentials: true }
      );

      console.log(data);
      setFriends(data.friends);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFriends();
  }, []);

  return (
    <section
      aria-labelledby="primary-heading"
      className="flex relative h-full min-w-0 flex-1 flex-col overflow-y-auto lg:order-last bg-onyx"
    >
      <div className="w-full text-white py-4 px-4 h-16 border-b-raisin-black border-b-2 items-center flex justify-between">
        <TopBar />
      </div>
      <div className="flex flex-row h-full">
        <div className="w-full px-8 py-4 text-french-gray overflow-y-auto max-h-[calc(100vh_-_64px)]">
          <FriendSearch />
          <div className="font-medium text-sm my-3">ONLINE - 5</div>
          {friends.map((friend) => (
            <FriendCard friend={friend} />
          ))}
        </div>
        <ActiveNow />
      </div>
    </section>
  );
};

export default FriendsPrimaryColumn;
