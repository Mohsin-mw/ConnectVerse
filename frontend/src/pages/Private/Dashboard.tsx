/**
 * Example component showcasing a two-column layouts.
 * @component
 */

import { PrimaryColumn, SecondaryColumn } from "../../components";

const Dashboard = () => {
  return (
    <main className="flex flex-1 overflow-hidden">
      <PrimaryColumn />
      <SecondaryColumn />
    </main>
  );
};

export default Dashboard;
