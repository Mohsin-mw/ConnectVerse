import { FriendSearch } from "..";
import useFriends from "../../hooks/useFriends";
import FriendCard from "./FriendCard";

const FriendsPrimaryColumn = () => {
  const { friends } = useFriends();
  return (
    <section
      aria-labelledby="primary-heading"
      className="flex relative h-full min-w-0 flex-1 flex-col overflow-y-auto lg:order-last bg-onyx"
    >
      <div className="w-full text-white py-4 px-4 h-16 border-b-raisin-black border-b-2 items-center flex justify-between"></div>
      <div className="flex flex-row h-full">
        <div className="w-full px-8 py-4 text-sonic-silver ">
          <FriendSearch />
          <div className="my-4">ONLINE - 5</div>
          {friends.map((friend) => (
            <FriendCard friend={friend} />
          ))}
        </div>
        <div className="w-1/3 bg-green ">Hello</div>
      </div>
    </section>
  );
};

export default FriendsPrimaryColumn;
