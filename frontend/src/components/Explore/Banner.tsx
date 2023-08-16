import { ServerSearch } from "..";

/**
 * A component for the banner section with a search feature.
 * @component
 */
const Banner = () => {
  return (
    <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 bg-illustration  bg-cover rounded-none">
      {/* Main Title */}
      <h1 className="text-center text-4xl uppercase font-bold tracking-wider sm:text-5xl lg:text-2xl">
        <span className="block text-white font-passion-one">
          Find your community on ConnectVerse
        </span>
      </h1>
      {/* Subtitle */}
      <p className="text-center text-white text-sm">
        From gaming, to music, to learning, there’s a place for you
      </p>
      {/* Server Search Component */}
      <ServerSearch />
    </div>
  );
};

export default Banner;
