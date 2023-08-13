/**
 * Image Component
 *
 * The Image component displays an image in a responsive layout for large screens.
 *
 * Example Usage:
 * ```tsx
 * import Image from './Image';
 *
 * function MyComponent() {
 *   return (
 *     <div>
 *       {/* Your other content goes here * /}
 *       <Image />
 *     </div>
 *   );
 * }
 * ```
 *
 * @returns {JSX.Element} - The rendered Image component.
 */
const Image = (): JSX.Element => {
  return (
    <div className="relative hidden   flex-1 lg:flex items-center justify-center w-full bg-cover bg-no-repeat bg-right bg-[url(https://i.ibb.co/nn1zMZZ/Discovery-Banner.png)]   ">
      <div className=" flex flex-col items-center justify-center  h-full w-full bg-black bg-opacity-30 ">
        <div className="text-white  text-9xl tracking-widest drop-shadow-md font-extrabold font-passion-one">
          DISCORD
          <span className="opacity-70">.</span>
        </div>
      </div>
    </div>
  );
};

export default Image;
