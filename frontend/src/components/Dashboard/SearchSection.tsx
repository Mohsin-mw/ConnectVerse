import { Searchbar } from "..";

/**
 * SearchSection component represents the section containing the search bar.
 * It includes a Searchbar component for entering search queries.
 */
const SearchSection = () => (
  <div className="w-full py-4 px-4 h-16 border-b-raisin-black border-b-2">
    {/* Render the Searchbar component */}
    <Searchbar />
  </div>
);

export default SearchSection;
