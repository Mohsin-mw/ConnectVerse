type FeatureProps = {
  children: React.ReactNode;
};

/**
 * Feature component for displaying a layout with two columns, commonly used for feature sections.
 * @component
 * @param {FeatureProps} props - Component properties.
 */
const Feature = ({ children }: FeatureProps) => {
  return (
    <div className="mt-24">
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
        {children}
      </div>
    </div>
  );
};

/**
 * Properties for the Feature component.
 * @typedef {Object} FeatureProps
 * @property {React.ReactNode} children - The child elements to be rendered within the feature columns.
 */

export default Feature;
