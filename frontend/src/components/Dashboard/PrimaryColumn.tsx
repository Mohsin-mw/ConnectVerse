import { MessageBox } from "..";
import MainHeader from "./MainHeader";

const PrimaryColumn = () => {
  return (
    <section
      aria-labelledby="primary-heading"
      className="flex relative h-full min-w-0 flex-1 flex-col overflow-y-auto lg:order-last bg-onyx"
    >
      {/* A static header that will update on route changes */}
      <MainHeader />

      {/* Main Content */}
      <div className="flex-1 p-4 overflow-y-auto max-h-[calc(100vh_-_64px)"></div>

      {/* Message box for handling messages, images, gifs, emojis */}
      <MessageBox />
    </section>
  );
};

export default PrimaryColumn;
