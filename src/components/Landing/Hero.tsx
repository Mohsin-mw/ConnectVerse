import { Link } from "react-router-dom";
import { Button } from "..";

/**
 * Hero component for the landing page, showcasing the main title, description, and call-to-action button.
 * @component
 */
const Hero = () => {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          {/* Main Title */}
          <h1 className="text-center text-4xl uppercase font-bold tracking-wider sm:text-5xl lg:text-8xl">
            <span className="block text-white font-passion-one">
              Explore a world...
            </span>
          </h1>
          {/* Description */}
          <p className="mx-auto mt-6 max-w-lg text-center text-base text-indigo-200 sm:max-w-2xl">
            A place where you and your closest allies can collaborate
            seamlessly, sharing moments and forging connections. Introducing
            ConnectVerse – a platform designed for effortless communication,
            enabling you to engage more frequently.
          </p>
          {/* Call-to-Action Button */}
          <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
            <div className="space-y-4 sm:mx-auto">
              {/* Button Link */}
              <Link to="/signUp">
                <Button variant="solid" color="slate">
                  Open ConnectVerse in your browser
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
