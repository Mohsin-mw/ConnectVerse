/**
 * Example component showcasing a two-column layouts.
 * @component
 */

const Dashboard = () => {
  return (
    <>
      <div className="lg:hidden">
        <div className="flex items-center justify-between bg-raisin-black py-2 px-4 sm:px-6 lg:px-8">
          <div>
            <img
              className="h-8 w-auto"
              src="https://i.ibb.co/V9KPjS7/discord-mark-white.png"
              alt="Logo"
            />
          </div>
        </div>
      </div>
      {/* Main Content Area */}
      <main className="flex flex-1 overflow-hidden">
        {/* Primary column */}
        <section
          aria-labelledby="primary-heading"
          className="flex h-full min-w-0 flex-1 flex-col overflow-y-auto lg:order-last bg-red-500"
        ></section>

        {/* Secondary column (hidden on smaller screens) */}
        <aside className="hidden lg:order-first lg:block lg:flex-shrink-0">
          <div className="relative flex h-full w-96 flex-col overflow-y-auto  bg-blue-500"></div>
        </aside>
      </main>
    </>
  );
};

export default Dashboard;
