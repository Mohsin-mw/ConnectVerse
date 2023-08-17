import atIcon from "../../assets/icons/at.svg";
import callIcon from "../../assets/icons/call.svg";
import videoIcon from "../../assets/icons/video.svg";
import pinIcon from "../../assets/icons/pin.svg";
import addFriendIcon from "../../assets/icons/add-friend.svg";
import inboxIcon from "../../assets/icons/inbox.svg";
import helpIcon from "../../assets/icons/help.svg";
import { Searchbar } from "..";

/**
 * Topbar component represents the section containing various buttons and icons.
 *
 */
const TopBar = () => (
  <div className="w-full text-white py-4 px-4 h-16 border-b-raisin-black border-b-2 items-center flex gap-6">
    {/* User Profile Button : Will be used later to open profile modal */}
    <button className="flex font-semibold gap-2 text-sm items-center">
      <img src={atIcon} /> Friends
    </button>

    {/*  Buttons for online all pending blocked add friend */}
    <div className="flex gap-6 [&>button]:shrink-0 [&>button]:p-[5px] [&>button]:rounded-md [&>button]:text-base">
      <button className=" bg-[#202225]">Online</button>
      <button className="">All</button>
      <button className="">Pending</button>
      <button className="">Blocked</button>
      <button className="bg-[#248046] text-white">Add Friend</button>
    </div>
    <div className="flex gap-6 ">
      <button>
        <img src={callIcon} />
      </button>
      <button>
        <img src={videoIcon} />
      </button>
      <button>
        <img src={pinIcon} />
      </button>
    </div>
  </div>
);

export default TopBar;
