import { DirectMessages, FriendsSection, SearchSection, UserCard } from "..";

/**
 * SecondaryColumn component represents the secondary column in the UI layout.
 * It contains various sections such as search bar, friends, direct messages, and user card.
 */
const SecondaryColumn = () => (
  <aside className="hidden lg:order-first lg:block lg:flex-shrink-0">
    {/* Outer container for the secondary column */}
    <div className="relative flex h-full w-96 flex-col overflow-y-auto bg-charleston-Green">
      <div className="flex flex-col items-start justify-start h-full">
        {/* Search Bar Section */}
        <SearchSection />

        {/* Main Content Section */}
        <div className="px-4 w-full flex-grow">
          {/* Friends Section */}
          <FriendsSection />

          {/* Direct Messages Section */}
          <div className="text-sonic-silver font-bold px-4">
            DIRECT MESSAGES
          </div>
          <DirectMessages />
        </div>

        {/* User Card Section */}
        <UserCard />
      </div>
    </div>
  </aside>
);

export default SecondaryColumn;
