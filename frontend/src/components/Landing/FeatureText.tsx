import { classNames } from "../../utils/Helpers";

type FeatureTextProps = {
  title: string;
  description: string;
  align: "right" | "left";
};

/**
 * FeatureText component for displaying a title and description with conditional alignment.
 * @component
 * @param {FeatureTextProps} props - Component properties.
 */

const FeatureText = ({ title, description, align }: FeatureTextProps) => {
  return (
    <div
      className={classNames(
        "mx-auto max-w-xl px-4 sm:px-6  lg:mx-0 lg:max-w-none lg:py-32 lg:px-0",
        align === "right" ? "lg:col-start-2" : "lg:col-end-2"
      )}
    >
      <div>
        <div className="mt-6">
          {/* Title */}
          <h2 className="text-5xl font-bold tracking-tight text-gray-900">
            {title}
          </h2>
          {/* Description */}
          <p className="mt-4 text-lg text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

/**
 * Properties for the FeatureText component.
 * @typedef {Object} FeatureTextProps
 * @property {string} title - The title of the feature.
 * @property {string} description - The description of the feature.
 * @property {"left" | "right"} align - The alignment of the feature text (left or right).
 */

export default FeatureText;
