import { PrimaryColumn, SecondaryColumn } from "../../components";

const Server = () => {
  return (
    <main className="flex flex-1 overflow-hidden ">
      {/* Secondary Column */}
      <SecondaryColumn>server sidebar</SecondaryColumn>
      
      <PrimaryColumn />
    </main>
  );
};

export default Server;
