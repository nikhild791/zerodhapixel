import Logo from "../assets/icons/Logo"
import Hamburger from "./Hamburger"
import { useState } from "react"

const Navbar = () => {
    const [ham, setHam] = useState<boolean>(false)
    const handleClick=()=>{
        setHam(s=>!s)
    }
  return (
    <div className="w-screen flex justify-center items-center fixed shadow-sm h-[67px] z-10 bg-white">
        <div className="w-[1100px] flex justify-between mx-auto items-center">
        <div className="top-5">
            <Logo height="55" width="130" />
        </div>
        <div>
            <ul className="flex flex-row gap-11 font-normal text-sm leading-6 text-[#666]">
                <li><a href="#"> Signup</a></li>
                <li><a href="#"> About</a></li>
                <li><a href="#"> Products</a></li>
                <li><a href="#"> Pricing</a></li>
                <li><a href="#"> Support</a></li>
                <li className="flex items-center">
                    <div className="flex flex-col gap-1 cursor-pointer " onClick={handleClick}  >
                        <span className="w-5 h-[2px] text-black bg-[#666] "></span>
                        <span className="w-5 h-[2px] text-black bg-[#666] "></span>
                        <span className="w-5 h-[2px] text-black bg-[#666] "></span>
                    </div>
                </li>
            </ul>
        </div>
        </div>
        <div className="absolute z-10 top-[67px] w-[1100px] flex justify-end ">
        {ham && <Hamburger/>}
        </div>
    </div>
  )
}

export default Navbar