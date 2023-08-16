import { Button } from "..";

/**
 * A component for server search functionality.
 * @component
 */
const ServerSearch = () => {
  /**
   * Handles the server search action.
   * @function
   */
  const HandleServerSearch = () => {};

  return (
    <div>
      {/* Input Field */}
      <div className="mx-auto mt-6 max-w-lg text-center text-base text-indigo-200 sm:max-w-2xl">
        <input
          type="text"
          placeholder="Start a conversation"
          className="bg-white w-full text-sonic-silver placeholder:text-sonic-silver focus:outline-none font-medium px-4 py-2 rounded-md"
        />
      </div>

      {/* Search Button */}
      <div
        onClick={HandleServerSearch}
        className="mx-auto mt-5 max-w-sm sm:flex sm:max-w-none sm:justify-center"
      >
        <div className="space-y-4 sm:mx-auto">
          <Button variant="solid" color="slate">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServerSearch;
