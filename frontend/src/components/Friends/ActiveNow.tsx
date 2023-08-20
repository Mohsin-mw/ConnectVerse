/**
 * This is the component for the ActiveNow section.
 * It displays a list of friends who are online
 *
 * TODO: pull in friends list dynamically and display the ones who are online
 */

const ActiveNow = () => {
  return (
    <div className="w-96 border-l text-white border-arsenic pl-4 pr-2 py-4 overflow-auto max-h-[calc(100vh_-_64px)]">
      <h2 className="text-lg font-semibold">Active Now</h2>

      <div className="mt-8 text-center">
        <p className="text-sm font-medium">It's quiet for now...</p>
        <p className="text-xs font-medium mt-3 text-french-gray">
          When a friend is online, they will be displayed here...
        </p>
      </div>
    </div>
  );
};

export default ActiveNow;
