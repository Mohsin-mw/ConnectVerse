/**
 * Button Component
 *
 * The Button component displays a button or a link element with different visual styles based on the provided variant and color.
 *
 * @param {Object} props - The props for the Button component.
 * @param {string} [props.variant="solid"] - The variant of the button. Can be "solid" or "outline". Default is "solid".
 * @param {string} [props.color="slate"] - The color of the button. Can be "slate", "blue", "white", or "primary". Default is "slate".
 * @param {string} [props.className] - Additional CSS class names to be applied to the button element.
 * @param {string} [props.href] - The URL to navigate to if the button acts as a link. If provided, the component renders an anchor element.
 * @param {any} [props.*] - Optional additional props to be passed to the button element.
 * @throws {Error} If an invalid color is provided for the specified variant.
 * @returns {JSX.Element} - The rendered Button component.
 */

import { Link } from "react-router-dom";
import { ExtractKeys } from "../../common";
import { classNames } from "../../utils/Helpers";

const baseStyles = {
  solid:
    "group inline-flex items-center justify-center rounded-md py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2",
  outline:
    "group inline-flex ring-1 items-center justify-center rounded-md py-2 px-4 text-sm focus:outline-none",
};

type VariantStyle = {
  slate: string;
  blue?: string;
  white: string;
  primary?: string;
};

const variantStyles: {
  [variant in ExtractKeys<typeof baseStyles>]: VariantStyle;
} = {
  solid: {
    slate:
      "bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900",
    white:
      "bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white",
    primary:
      "bg-primary text-white hover:bg-primary-light focus-visible:outline-white",
  },
  outline: {
    slate:
      "border border-sonic-silver ring-sonic-silver text-sonic-silver hover:text-sonic-silver hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300",
    white:
      "ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white",
  },
};

const Button = ({
  variant = "solid",
  color = "slate",
  className,
  href,
  ...props
}: {
  variant?: ExtractKeys<typeof baseStyles>;
  color?: ExtractKeys<VariantStyle>;
  className?: string;
  href?: string;
  [x: string]: any; // Optional additional props
}): JSX.Element => {
  const variantStyle = variantStyles[variant];
  const colorStyle = variantStyle[color];

  if (!colorStyle) {
    throw new Error(`Invalid color "${color}" for variant "${variant}"`);
  }

  className = classNames(baseStyles[variant], colorStyle, className);

  return href ? (
    <Link to={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  );
};

export default Button;
