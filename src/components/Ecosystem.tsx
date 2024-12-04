import RightArrow from "../assets/icons/RightArrow";

const Ecosystem = () => {
  return (
    <section className="relative">
      <div className="flex flex-row justify-between w-[1100px] mx-auto ">
        <div className="w-5/12">
        <h2 className="text-[2rem] font-medium mb-10 text-[#424242]">Trust with confidence</h2>
            <div className="why-us-section">
              <h3  className="text-xl font-medium leading-6 text-[#424242]">
                Customer-first always
              </h3>
              <p className="mt-1 mb-8 text-[#666] leading-7">
                That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India. 
              </p>
            </div>
            <div className="why-us-section">
              <h3 className="text-xl font-medium leading-6 text-[#424242]">No spam or gimmicks</h3>
              <p className="mt-1 mb-8 text-[#666] leading-7">
                No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
              </p>
            </div>
            <div className="why-us-section">
              <h3 className="text-xl font-medium leading-6 text-[#424242]">The Zerodha universe</h3>
              <p className="mt-1 mb-8 text-[#666] leading-7">
                Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
              </p>
            </div>
            <div className="why-us-section">
              <h3 className="text-xl font-medium leading-6 text-[#424242]">Do better with money</h3>
              <p className="mt-1 mb-8 text-[#666] leading-7">
                With initiatives like <a href="https://support.zerodha.com/category/trading-and-markets/kite-features/nudges/articles/what-is-nudge" target="_blank">Nudge</a> and <a href="https://support.zerodha.com/category/console/profile/killswitch/articles/what-is-the-kill-switch" target="_blank">Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.
              </p>
          </div>
        </div>
        <div className="w-6/12">
          <div className="mt-16 flex justify-center">
          <img src="/src/assets/images/ecosystem.png" alt="The Zerodha Universe" />
          </div>
          <div className="text-[#387ed1] flex flex-row justify-evenly text-center p-4 leading-6 mb-4">
            <a href="#" className="flex flex-row items-center gap-2">Explore our products <div ><RightArrow size="sm"/></div></a>
            <a href="#" className="flex flex-row items-center gap-2">Try kite demo <span><RightArrow size="sm"/></span></a>
          </div>
        </div>
      </div>
      <div className="mt-14">
        <img className="mx-auto" src="/src/assets/images/press-logos.png" alt="" />
      </div>
    </section>
  );
};

export default Ecosystem;
