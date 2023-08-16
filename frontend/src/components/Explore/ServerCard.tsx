import verified from "../../assets/verified.png";
import { ExploreServer } from "../../common";

/**
 * This is a the ServerCard component for the /dashboard/explore page
 *
 * @returns
 */

type ServerCardProps = {
  server: ExploreServer;
};

const ServerCard = ({ server }: ServerCardProps) => (
  <div className="w-80 h-96 bg-dark-charcoal rounded-md overflow-hidden  cursor-pointer">
    {/* banner */}
    <img className="w-full object-cover" src={server.Image} />

    {/* server icon */}
    <img
      className="w-10 relative bottom-7"
      style={{ left: "19px" }}
      src={server.Icon}
      alt=""
    />

    {/* card item text */}
    <div className="flex h-48 flex-col justify-between relative bottom-3">
      <div className="px-4">
        {/* title */}
        <h4 className="flex gap-2 text-xl text-white">
          {/* verified badge */}
          <img className="h-5 w-5 relative top-1" src={verified} alt="" />
          {server.Name}
        </h4>
        <p
          className="text-sm my-4 leading-relaxed"
          style={{ color: "#B9BBBE" }}
        >
          {server.Description}
        </p>
      </div>

      {/* online and members container */}
      <div className="flex justify-around px-4 mb-2">
        <p
          className="flex items-center gap-1 text-sm"
          style={{ color: "#B9BBBE" }}
        >
          {/* server status symbol */}
          <span className="w-2 h-2 rounded-full inline-block bg-green"></span>
          {server.membersOnline} Online
        </p>

        <p
          className="flex items-center gap-1 text-sm"
          style={{ color: "#B9BBBE" }}
        >
          {/* server status symbol */}
          <span className="w-2 h-2 rounded-full inline-block bg-grey"></span>
          {server.membersTotal} Members
        </p>
      </div>
    </div>
  </div>
);

export default ServerCard;
