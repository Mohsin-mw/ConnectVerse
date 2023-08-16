import ServerCard from "../../components/Explore/ServerCard";
import { Banner } from "../../components";
import useExploreServes from "../../hooks/useExploreServers";

const Explore = () => {
  const { servers } = useExploreServes();
  return (
    <main className="flex flex-1 overflow-hidden ">
      {/* Secondary Column */}
      <div className="bg-onyx w-full">
        <Banner />
        <div className="my-8 px-8 grid gap-4 grid-cols-4">
          {servers.map((server) => (
            <ServerCard server={server} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Explore;
