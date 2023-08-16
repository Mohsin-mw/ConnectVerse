import { Button, ToggleButton } from "../../components";
import toggleIcon from "../../assets/icons/toggle.svg";
import checkIcon from "../../assets/icons/check.svg";
/**
 * Appearance component displays option to change theme.
 *
 * @component
 */
const Appearance = () => {
  return (
    <div>
      {/* Title */}
      <div className="my-4 text-base">Appearance</div>
      <div>
        <h3 className=" mb-8 text-sm  font-bold  uppercase ">Theme</h3>
        <div>
          <div
            role="radiogroup"
            aria-labelledby="uid_25579"
            aria-orientation="horizontal"
            aria-disabled="false"
          >
            <section className="my-8  flex  gap-x-8 ">
              <ToggleButton>
                <div
                  className="bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.3)] cursor-pointer rounded-full w-full h-full"
                  aria-label="Light"
                  role="radio"
                  aria-checked="false"
                ></div>
              </ToggleButton>
              <ToggleButton>
                <div
                  className="bg-currentColor shadow-[0_0_0_1px_rgba(0,0,0,0.3)] cursor-pointer rounded-full w-full h-full"
                  aria-label="Dark"
                  role="radio"
                  aria-checked="true"
                ></div>
                <div className="border-box top-[-2px] left-[-2px] rounded-full absolute w-full h-full shadow-dark-charcoal">
                  <img src={checkIcon} />
                </div>
              </ToggleButton>
              <ToggleButton>
                <div
                  className="flex flex-row items-center justify-center border-box bg-currentColor shadow-[0_0_0_1px_rgba(0,0,0,0.3)] cursor-pointer rounded-full w-full h-full"
                  aria-label="Sync with computer"
                  role="radio"
                  aria-checked="false"
                >
                  <img src={toggleIcon} />
                </div>
              </ToggleButton>
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

export default Appearance;
