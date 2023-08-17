import {
  SecondaryColumn,
  SearchSection,
  FriendsSection,
  DirectMessages,
  FriendsPrimaryColumn,
} from "../../components";

const Friends = () => {
  return (
    <main className="flex flex-1 overflow-hidden">
      {/* Primary Column */}
      <FriendsPrimaryColumn />

      {/* Secondary Column : Sidebar */}
      <SecondaryColumn>
        {/* Search Bar Section */}
        <SearchSection />

        {/* Main Content Section */}
        <div className="px-4 w-full flex-grow">
          {/* Friends Section */}
          <FriendsSection />

          {/* Direct Messages Section */}
          <div className="text-sonic-silver font-semibold text-sm">
            DIRECT MESSAGES
          </div>
          <DirectMessages />
        </div>
      </SecondaryColumn>
    </main>
  );
};

export default Friends;
