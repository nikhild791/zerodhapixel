import OthersTradersIcon from "../assets/icons/OthersTradersIcon";
import PricingIcon from "../assets/icons/PricingIcon";
import RightArrow from "../assets/icons/RightArrow";
const Pricing = () => {
  return (
    <section className="relative">
      <div className="w-[1100px] mx-auto ">
        <div className="flex flex-row justify-around">

        <div className="w-[39%]">
          <h2 className="text-[2rem] font-medium mb-5">Unbeatable pricing</h2>
          <p className="mb-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
        </div>
        <div className="flex flex-row w-[56%] justify-between  ">
          <div className="flex flex-row ">
            <PricingIcon height="80" width="160" />
            <p className="text-[10px] relative -left-10  text-[#666]">
              Free account
              <br />
              opening
            </p>
          </div>
          <div className="flex flex-row ">
            <PricingIcon height="80" width="160" />
            <p className="text-[10px] w-32 relative -left-10 top-8 text-[#666]">
              Free equity delivery <br /> and direct mutual funds
            </p>
          </div>
          <div className="flex flex-row ">
            <OthersTradersIcon height="80" width="160" />
            <p className="text-[10px] relative -left-10 top-8 w-20 text-[#666]">
              Intraday and <br />
              F&O
            </p>
          </div>
        </div>
        </div>
      <a href="#" className="mr-3 flex flex-row items-center text-base gap-2  font-medium text-[#387ed1]">
            See pricing
            <span>
              <RightArrow size="sm" />
            </span>
          </a>
      </div>
    </section>
  );
};

export default Pricing;
