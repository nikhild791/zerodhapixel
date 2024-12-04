import RightArrow from "../assets/icons/RightArrow";
import LandingVarsityEdu from "../assets/images/LandingVarsityEdu";

const FreeEdu = () => {
  return (
    <section className="relative">
      <div className="w-[1100px]  flex flex-row justify-between items-center mx-auto gap-32">
        <div>
          <LandingVarsityEdu />
        </div>
        <div>
        

          <p className="text-[2rem] leading-6 mb-5 font-medium ">Free and open market education</p>
          <p className="leading-7 mb-4">
           
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" className="flex flex-row items-center text-base gap-2  font-medium text-[#387ed1]">
            Varsity
            <span>
              <RightArrow size="sm" />
            </span>
          </a>
          <p className="mt-8 mb-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="#" className="flex flex-row items-center gap-2 font-medium text-[#387ed1] text-base">
            TradingQ&A{" "}
            <div className="text-[#386ed1]">
              <RightArrow size="sm" />
            </div>
          </a>
          </div>
      </div>
    </section>
  );
};

export default FreeEdu;
