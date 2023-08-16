import { Button } from "../../components";
/**
 * Appearence component displays option to change theme.
 *
 * @component
 */
const Appearence = () => {
  return (
    <div>
      {/* Title */}
      Appearence
      <div className="box-border mt-8 outline-0 ">
        <h3 className="box-border mb-8 text-[12px] leading-[16px] font-bold tracking-[.0.02em] uppercase ">
          Theme
        </h3>
        <div>
          <div
            role="radiogroup"
            aria-labelledby="uid_25579"
            aria-orientation="horizontal"
            aria-disabled="false"
          >
            <section className="mt-[0px] mb-[16px] box-border flex flex-wrap gap-y-[16px] gap-x-[24px] ">
              <div className="relative h-[60px] w-[60px] ">
                <div
                  className="bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.3)] cursor-pointer rounded-full w-full h-full"
                  aria-label="Light"
                  role="radio"
                  tabindex="-1"
                  aria-checked="false"
                ></div>
              </div>
              <div className="relative h-[60px] w-[60px] ">
                <div
                  className="bg-currentColor shadow-[0_0_0_1px_rgba(0,0,0,0.3)] cursor-default rounded-full w-full h-full"
                  aria-label="Dark"
                  role="radio"
                  tabindex="0"
                  aria-checked="true"
                ></div>
                <div className="border-box w-[calc(100%+4px)] h-[calc(100%+4px)] top-[-2px] left-[-2px] rounded-full absolute w-full h-full shadow-[0_0_0_1px_rgba(0,0,0,0.4)] shadow-[0_0_0_1px_rgba(0,0,0,0.3)]">
                  <svg
                    className="border-box"
                    aria-hidden="true"
                    role="img"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle r="8" cx="12" cy="12" fill="#ffffff"></circle>
                    <g fill="none" fill-rule="evenodd">
                      <path
                        className="checkmark-1RtODZ"
                        fill="currentColor"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="relative h-[60px] w-[60px]">
                <div
                  className="border-box bg-currentColor shadow-[0_0_0_1px_rgba(0,0,0,0.3)] cursor-default rounded-full w-full h-full"
                  aria-label="Sync with computer"
                  role="radio"
                  tabindex="-1"
                  aria-checked="false"
                >
                  <div className=" border-box h-[60px] w-[60px] absolute text-center mt-[18px]">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#ffffff"
                      className="text-center w-full"
                    >
                      <g id="Frame_-_24px">
                        <rect y="0" fill="none" width="24" height="24"></rect>
                      </g>
                      <g id="Filled_Icons">
                        <g>
                          <path
                            fill="#ffffff"
                            d="M6.351,6.351C7.824,4.871,9.828,4,12,4c4.411,0,8,3.589,8,8h2c0-5.515-4.486-10-10-10 C9.285,2,6.779,3.089,4.938,4.938L3,3v6h6L6.351,6.351z"
                          ></path>
                          <path
                            fill="#ffffff"
                            d="M17.649,17.649C16.176,19.129,14.173,20,12,20c-4.411,0-8-3.589-8-8H2c0,5.515,4.486,10,10,10 c2.716,0,5.221-1.089,7.062-2.938L21,21v-6h-6L17.649,17.649z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div>
        <Button className="text-inherit" variant="outline" color="white">
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default Appearence;
