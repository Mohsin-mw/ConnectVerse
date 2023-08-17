import ServerCard from "../../components/Explore/ServerCard";
import { Banner, SecondaryColumn } from "../../components";
import useExploreServes from "../../hooks/useExploreServers";
import { Link } from "react-router-dom";
import compassIcon from "../../assets/icons/compass.svg";
import atomIcon from "../../assets/icons/atom.svg";
import controllerIcon from "../../assets/icons/controller.svg";
import hatIcon from "../../assets/icons/hat.svg";
import musicIcon from "../../assets/icons/music.svg";
import nodeTreeIcon from "../../assets/icons/node-tree.svg";
import tvIcon from "../../assets/icons/tv.svg";

const Explore = () => {
  const { servers } = useExploreServes();
  return (
    <main className="flex flex-1 overflow-hidden ">
      {/* Secondary Column */}
      <SecondaryColumn>
        <p className="font-passion-one text-3xl p-4 mb-2 text-white">
          Discover
        </p>

        {/* Discover Page Links */}
        <div className="px-4 grid gap-1 text-french-gray font-medium">
          {/* Acitve State */}
          <Link
            to="/dashboard/explore"
            className="flex gap-4 items-center p-3 text-white bg-primary rounded text-sm"
          >
            <img src={compassIcon} /> Home
          </Link>

          {/* Links below need routes not yet created */}
          <Link
            to="/dashboard/explore"
            className="flex gap-4 items-center hover:bg-onyx p-3 rounded text-sm hover:text-white"
          >
            <img src={controllerIcon} /> Gaming
          </Link>
          <Link
            to="/dashboard/explore"
            className="flex gap-4 items-center hover:bg-onyx p-3 rounded text-sm hover:text-white"
          >
            <img src={musicIcon} /> Music
          </Link>
          <Link
            to="/dashboard/explore"
            className="flex gap-4 items-center hover:bg-onyx p-3 rounded text-sm hover:text-white"
          >
            <img src={hatIcon} /> Education
          </Link>
          <Link
            to="/dashboard/explore"
            className="flex gap-4 items-center hover:bg-onyx p-3 rounded text-sm hover:text-white"
          >
            <img src={atomIcon} /> Science & Tech
          </Link>
          <Link
            to="/dashboard/explore"
            className="flex gap-4 items-center hover:bg-onyx p-3 rounded text-sm hover:text-white"
          >
            <img src={tvIcon} /> Entertainment
          </Link>
          <Link
            to="/dashboard/explore"
            className="flex gap-4 items-center hover:bg-onyx p-3 rounded text-sm hover:text-white"
          >
            <img src={nodeTreeIcon} /> Student Hubs
          </Link>
        </div>
      </SecondaryColumn>

      {/* Main Content Of Community Page */}
      <div className="bg-onyx w-full overflow-auto">
        <Banner />

        {/* Server Card Responsive Grid */}
        <div className="px-4 mt-12 mb-8">
          <h3 className="text-xl text-white font-bold mb-4">
            Featured Communities
          </h3>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            {servers.map((server) => (
              <ServerCard server={server} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Explore;
