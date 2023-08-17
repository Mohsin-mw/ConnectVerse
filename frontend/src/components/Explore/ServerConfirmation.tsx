import { Link } from "react-router-dom";
import { ExploreServer } from "../../common";

type ServerConfirmationProps = {
  server: ExploreServer;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const ServerConfirmation = ({ server, setModal }: ServerConfirmationProps) => {
  return (
    <div className="absolute flex flex-col w-full z-10 -ml-20 h-full text-center items-center justify-center bg-black/40">
      <div className="bg-raisin-black max-w-md border-2 flex flex-col gap-5 px-6 py-5 border-sonic-silver rounded-lg">
        <h3 className="text-xl text-white/90 font-bold">
          Do you want to join {server.Name} server?
        </h3>
        <div className="flex justify-between items-center gap-3 px-5 py-5">
          <Link
            to={server.Url}
            className="px-10 py-2 w-1/2 bg-primary rounded-md border border-grey"
          >
            Yes
          </Link>
          <button
            onClick={() => setModal(false)}
            className="px-10 py-2 w-1/2 bg-red-600 rounded-md border border-grey"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServerConfirmation;
