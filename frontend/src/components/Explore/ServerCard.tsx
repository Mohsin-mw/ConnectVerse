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
  <div className="group bg-dark-charcoal relative hover:bg-raisin-black transition-colors duration-150 rounded-md overflow-hidden cursor-pointer">
    {/* banner and server icon container */}
    <div className="group-hover:scale-[1.02] transition ease-out duration-300">
      {/* banner */}
      <img className="w-full object-cover" src={server.Image} />

      {/* server icon */}
      <img
        className="w-16 relative bottom-11 left-[30px]"
        src={server.Icon}
        alt=""
      />
    </div>

    {/* card item text */}
    <div className="flex h-48 flex-col justify-between relative bottom-3">
      <div className="px-4">
        {/* title */}
        <h4 className="flex gap-2 text-lg text-white">
          {/* verified badge */}
          <img className="h-5 w-5 relative top-1" src={verified} alt="" />
          {server.Name}
        </h4>
        <p className="text-sm my-4 leading-relaxed text-start text-french-gray">
          {server.Description}
        </p>
      </div>

      {/* online and members container */}
      <div className="flex gap-4 px-4 mb-2 text-xs text-french-gray">
        <p className="flex items-center gap-1">
          {/* server status symbol */}
          <span className="w-2 h-2 rounded-full inline-block bg-green"></span>
          {server.membersOnline} Online
        </p>

        <p className="flex items-center gap-1">
          {/* server status symbol */}
          <span className="w-2 h-2 rounded-full inline-block bg-grey"></span>
          {server.membersTotal} Members
        </p>
      </div>
    </div>
  </div>
);

export default ServerCard;
