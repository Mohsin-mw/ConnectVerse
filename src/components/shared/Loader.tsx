import { useEffect } from "react";

/**
 * Loader component that displays a loading indicator and prevents scrolling while active.
 * @component
 */
const Loader = () => {
  useEffect(() => {
    /**
     * Disable scrolling by adding a class to the root HTML element.
     * @function
     * @name disableScrolling
     * @inner
     */
    const disableScrolling = () => {
      document.documentElement.classList.add("noscroll");
    };

    /**
     * Enable scrolling by removing the class from the root HTML element.
     * @function
     * @name enableScrolling
     * @inner
     */
    const enableScrolling = () => {
      document.documentElement.classList.remove("noscroll");
    };

    // When the component mounts, disable scrolling
    disableScrolling();

    // When the component unmounts, enable scrolling
    return () => {
      enableScrolling();
    };
  }, []);

  /**
   * Render the Loader component.
   * @returns {JSX.Element} JSX representation of the Loader.
   */
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-white">
      <span className="loading loading-infinity loading-lg text-purple-800"></span>
    </div>
  );
};

export default Loader;
