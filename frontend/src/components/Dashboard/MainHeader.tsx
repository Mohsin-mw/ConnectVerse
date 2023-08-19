import atIcon from "../../assets/icons/at.svg";
import callIcon from "../../assets/icons/call.svg";
import videoIcon from "../../assets/icons/video.svg";
import pinIcon from "../../assets/icons/pin.svg";
import addFriendIcon from "../../assets/icons/add-friend.svg";
import helpIcon from "../../assets/icons/help.svg";
import { Searchbar, InboxPopup } from "..";

/**
 * MainHeader component represents the section containing various icons.
 * The icons change based on whether a channel or user chat is selected.
 */
const MainHeader = () => (
  <div className="w-full text-white py-4 px-4 h-16 border-b-raisin-black border-b-2 items-center flex justify-between">
    {/* User Profile Button : Will be used later to open profile modal */}
    <button className="flex font-semibold gap-2 text-sm items-center">
      <img src={atIcon} /> Emily{" "}
      <div aria-hidden className="w-2 h-2 rounded-full bg-green"></div>
    </button>

    {/* Header Icons For Call, VideoCall, Pin, Add Friend, Inbox and Help */}
    <div className="flex gap-6 [&>button]:shrink-0 items-center">
      <button>
        <img src={callIcon} />
      </button>
      <button>
        <img src={videoIcon} />
      </button>
      <button>
        <img src={pinIcon} />
      </button>
      <button>
        <img src={addFriendIcon} />
      </button>
      <Searchbar />
      <InboxPopup />
      <button>
        <img src={helpIcon} />
      </button>
    </div>
  </div>
);

export default MainHeader;
