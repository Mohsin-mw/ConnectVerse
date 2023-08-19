/**
 * Utility function to generate a space-separated list of CSS class names.
 *
 * This function takes an arbitrary number of class names as arguments and filters out any falsy values (e.g., empty strings, null, undefined).
 * The remaining class names are then joined with a space separator and returned as a single string.
 *
 * @function
 * @param {...string} classes - List of CSS class names to be concatenated.
 * @returns {string} - A string containing the concatenated class names.
 * @example
 * Returns: "active button primary"
 * const combinedClasses = classNames("active", "button", "primary");
 *
 * Returns: "button primary"
 * const emptyClass = classNames("", "button", "primary");
 */
export function classNames(...classes: string[]): string {
  // Filter out falsy class names and join the remaining ones with a space separator
  return classes.filter(Boolean).join(" ");
}

/**
 * Creates a new date formatter.
 */
const dateFormatter = new Intl.DateTimeFormat("en-us", {
  dateStyle: "medium",
});

/**
 * Utility function to format dates.
 * @param date Takes date as a string
 * @returns formatted date as defined in dateFormatter
 */
export function formatDate(date: string) {
  return dateFormatter.format(new Date(date));
}
