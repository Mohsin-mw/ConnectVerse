import { Searchbar } from "..";

const SecondaryColumn = () => {
  return (
    <aside className="hidden lg:order-first lg:block lg:flex-shrink-0">
      <div className="relative flex h-full w-96 flex-col overflow-y-auto  bg-dark-charcoal">
        <div className="flex flex-col items-center justify-start h-full">
          <div className=" py-4 px-4 h-16 w-full border-b-raisin-black  border-b-2 ">
            <Searchbar />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SecondaryColumn;
