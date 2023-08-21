/**
 * Example component showcasing a two-column layouts.
 * @component
 */

import { useNavigate } from "react-router-dom";
import {
  DirectMessages,
  FriendsSection,
  PrimaryColumn,
  SearchSection,
  SecondaryColumn,
} from "../../components";
import { useEffect } from "react";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("ConnectVerseUI")) {
      window.alert("signin again");
      navigate("/signin");
    }
  }, []);

  return (
    <main className="flex flex-1 overflow-hidden">
      {/* Primary Column */}
      {/* <PrimaryColumn /> */}
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

export default Dashboard;
