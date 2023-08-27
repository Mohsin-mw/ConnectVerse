import { PiCaretDownBold } from "react-icons/pi";
import { ChannelLink, PrimaryColumn, SecondaryColumn } from "../../components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Server = () => {
  interface Server {
    channels: Array<{ channelName: string }>;
    members: string[];
    owner: string;
    pic: string;
    serverName: string;
    _id: string;
  }

  const { serverId } = useParams();
  const [serverDetails, setServerDetails] = useState<Server>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          import.meta.env.VITE_BACKEND_URL +
            `/server/fetch-server-details/${serverId}`,
          { withCredentials: true }
        );
        console.log(data);

        setServerDetails(data.serverDetails);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [serverId]);

  return (
    <main className="flex flex-1 overflow-hidden ">
      {/* Secondary Column */}
      <SecondaryColumn>
        <div className="px-4 py-3 shadow shadow-black/20 text-white font-semibold bg-dark-charcoal flex items-center justify-between">
          {/* Server Name */}
          <p>{serverDetails.serverName}</p>

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

          {serverDetails.channels.map((e) => (
            <ChannelLink to={`/dashboard/servers/${serverId}/${e.channelName}`}>
              {e.channelName}
            </ChannelLink>
          ))}

          {/* <ChannelLink to={`/dashboard/servers/[server_id]/general`}>
            👋 Welcome
          </ChannelLink>
          <ChannelLink to={`/dashboard/servers/[server_id]/giveaways`}>
            🎉 Giveaways
          </ChannelLink> */}
        </div>
      </SecondaryColumn>

      {/* Primary Column */}
      <PrimaryColumn />
    </main>
  );
};

export default Server;
