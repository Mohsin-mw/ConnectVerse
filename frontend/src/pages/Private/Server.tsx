import { PiCaretDownBold } from "react-icons/pi";
import { ChannelLink, PrimaryColumn, SecondaryColumn } from "../../components";

const Server = () => {
  return (
    <main className="flex flex-1 overflow-hidden ">
      {/* Secondary Column */}
      <SecondaryColumn>
        <div className="px-4 py-3 shadow shadow-black/20 text-white font-semibold bg-dark-charcoal flex items-center justify-between">
          {/* Server Name */}
          <p>Graph's Server</p>

          {/* Open a dropdown menu for server settings later */}
          <button
            aria-label="Server Options"
            className="w-6 h-6 hover:bg-onyx grid place-items-center rounded"
          >
            <PiCaretDownBold />
          </button>
        </div>
        <div className="flex-1 px-2 pb-2 flex flex-col gap-0.5 mt-4">
          {/* Channel Links */}
          <ChannelLink to={`/dashboard/servers/[server_id]/general`}>
            👋 Welcome
          </ChannelLink>
          <ChannelLink to={`/dashboard/servers/[server_id]/giveaways`}>
            🎉 Giveaways
          </ChannelLink>
        </div>
      </SecondaryColumn>

      {/* Primary Column */}
      <PrimaryColumn />
    </main>
  );
};

export default Server;
