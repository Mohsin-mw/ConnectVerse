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
            <span className="block text-white font-passion-one ">
              Imagine a place...
            </span>
          </h1>
          {/* Description */}
          <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-2xl">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
          {/* Call-to-Action Button */}
          <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
            <div className="space-y-4 sm:mx-auto ">
              {/* Button Link */}
              <Link to="/signUp">
                <Button variant="solid" color="slate">
                  Open Discord in your browser
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
