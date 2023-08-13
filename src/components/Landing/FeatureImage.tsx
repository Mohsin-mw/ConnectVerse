import { classNames } from "../../utils/Helpers";

type FeatureImageProps = {
  imageUrl: string;
  alignImage: "left" | "right";
};

/**
 * FeatureImage component for displaying an image with conditional alignment.
 * @component
 * @param {FeatureImageProps} props - Component properties.
 */

const FeatureImage = ({ imageUrl, alignImage }: FeatureImageProps) => {
  /**
   * Generate CSS classes based on alignment and other styles.
   * @function
   * @name generateImageClasses
   * @inner
   */
  const generateImageClasses = () => {
    return classNames(
      "w-full",
      "rounded-xl",
      "shadow-xl",
      "ring-1",
      "ring-black",
      "ring-opacity-5",
      "lg:absolute",
      alignImage === "right" ? "lg:right-0" : "lg:left-0", // Conditional class based on alignImage
      "lg:h-full",
      "lg:w-auto",
      "lg:max-w-none"
    );
  };

  // Generate the image's CSS classes
  const imageClasses = generateImageClasses();

  return <img className={imageClasses} src={imageUrl} />;
};

/**
 * Properties for the FeatureImage component.
 * @typedef {Object} FeatureImageProps
 * @property {string} imageUrl - The URL of the image to be displayed.
 * @property {"left" | "right"} alignImage - The alignment of the image (left or right).
 */

export default FeatureImage;
