import Coin from "../assets/images/hamburger/Coin"
import Console from "../assets/images/hamburger/Console"
import KiteConnect from "../assets/images/hamburger/KiteConnect"
import KiteLogo from "../assets/images/hamburger/KiteLogo"

const Hamburger = () => {
  return (
    <div className="w-[700px] bg-white shadow-ham">
        <div className="flex flex-row w-full justify-between py-5">
            <div className="flex flex-col justify-center items-center  gap-2 w-[22%]">
              <KiteLogo/>
              <p className="text-[#666] font-medium text-sm leading-8">Kite</p>
              <p className="font-[#9b9b9b] text-xs">Trading platform</p>
              </div>
            <div className="flex flex-col justify-center items-center  gap-2 w-[22%]">
              <Console/>
              <p className="text-[#666] font-medium text-sm leading-8">Console</p>
              <p className="font-[#9b9b9b] text-xs">Backoffice</p>
             </div>
            <div className="flex flex-col justify-center items-center gap-2 w-[22%]">
              <KiteConnect/>
              <p className="text-[#666] font-medium text-sm leading-8">Kite Connect</p>
              <p className="font-[#9b9b9b] text-xs">Trading APIs</p>
               </div>
            <div className="flex flex-col justify-center items-center gap-2 w-[22%]">
              <Coin/>
              <p className="text-[#666] font-medium text-sm">Coin</p>
              <p className="font-[#9b9b9b] text-xs">Mutual funds</p>
              </div>
        </div>
        <div className="bg-[#fafafb] flex flex-rwo py-8 px-5">
        <div className="w-[56%] flex flex-row justify-normal">
        <div className="w-[48%]">
          <h2 className="font-medium text-base text-[#424242] mb-4 leading-8">Utilities</h2>
          <ul>
            <li className="text-sm mb-[5px] text-[#666]">Brokerage calculator</li>
            <li className="text-sm mb-[5px] text-[#666]">Margin calcalator</li>
            <li className="text-sm mb-[5px] text-[#666]">Holiday calendar</li>
            <li className="text-sm mb-[5px] text-[#666]">Markets</li>
          </ul>
        </div>
        <div className="2-[48%]">
          <h2 className="font-medium text-base text-[#424242] mb-4 leading-8">Updates</h2>
          <ul>
            <li className="text-sm mb-[5px] text-[#666]">Z-Connect blog</li>
            <li className="text-sm mb-[5px] text-[#666]">Pulse News</li>
            <li className="text-sm mb-[5px] text-[#666]">Circulars / Bulletin</li>
            <li className="text-sm mb-[5px] text-[#666]">IPOs</li>
          </ul>
        </div>
        </div>
        <div className="w-[39%] ">
      
          <h2 className="font-medium text-base text-[#424242] mb-4 leading-8 relative left-5">Education</h2>
          <div className="flex flex-row justify-center">
            <div className="mr-10">
              <img src="/src/assets/images/hamburger/varsity.png" className="mb-[10px]" alt="" />
              <p className="text-sm mb-[5px] text-[#666]">Varsity</p>
            </div>
            <div className="mr-10">
              <img src="/src/assets/images/hamburger/tqna.png" className="mb-[10px]" alt="" />
              <p className="text-sm mb-[5px] text-[#666] ">Trading Q&A</p>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Hamburger