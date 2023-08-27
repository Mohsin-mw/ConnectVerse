import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ChannelLink,
  PrimaryColumn,
  SecondaryColumn,
  ServerMenu,
} from "../../components";
import { type Server as IServer } from "../../common";

const Server = () => {
  const { serverId } = useParams();
  const [serverDetails, setServerDetails] = useState<IServer | undefined>();

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
          <p>{serverDetails?.serverName}</p>

          <ServerMenu serverDetails={serverDetails} />
        </div>
        <div className="flex-1 px-2 pb-2 flex flex-col gap-0.5 mt-4">
          {/* Channel Links */}

          {serverDetails?.channels.map((e) => (
            <ChannelLink
              key={e.channelName}
              to={`/dashboard/servers/${serverId}/${e.channelName}`}
            >
              {e.channelName}
            </ChannelLink>
          ))}
        </div>
      </SecondaryColumn>

      {/* Primary Column */}
      <PrimaryColumn />
    </main>
  );
};

export default Server;
