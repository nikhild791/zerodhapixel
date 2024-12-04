import Logo from "../assets/icons/Logo"
import Whatsapp from "../assets/icons/social/Whatsapp"
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import Twitter from "../assets/icons/social/Twitter";
import Youtube from "../assets/icons/social/Youtube";


const Footer = () => {
  return (
    <section className='bg-[#fbfbfb] text-[#eee] border-t-[1px] border-[#eee] px-0 pt-4 pb-2'>
        <div className='w-[1100px] mx-auto mt-7'>
            <div className='flex flex-row justify-between'>
                <div className="w-[22%]">         
                    <div >
                       <Logo height="55" width="130" />
                    </div>
                    <p className="text-sm text-[#666]">© 2010 - 2024, Zerodha Broking Ltd.</p>
                    <p className="text-sm text-[#666]">All rights reserved.</p>
                    <ul  className="flex flex-row mt-4 justify-start gap-2 items-center">
                        <li className="mr-3"><Twitter/></li>
                        <li className="mr-3"><IoLogoFacebook className="h-5"/></li>
                        <li className="mr-3"><FaInstagram/></li>
                        <li className="mr-3"><FaLinkedinIn/></li>
                    </ul>
                    <hr  className="border-[#eee] border-[1px] my-2"/>
                    <ul className="mt-2 flex flex-row justify-start gap-2 items-center">
                        <li className="mr-3"><Youtube/></li>
                        <li className="mr-3"><Whatsapp/></li>
                        <li className="mr-3"><FaTelegram/></li>
                    </ul>
                </div>
                <div className="w-[22%]">
                    <p className="text-lg font-medium text-[#424242] mb-5">Company</p>
                    <ul className="flex flex-col gap-2">
                        <li  className="font-medium text-base text-[#666] ">About</li>
                        <li  className="font-medium text-base text-[#666] ">Products</li>
                        <li  className="font-medium text-base text-[#666] ">Pricing</li>
                        <li  className="font-medium text-base text-[#666] ">Referral programme</li>
                        <li  className="font-medium text-base text-[#666] ">Careers</li>
                        <li  className="font-medium text-base text-[#666] ">Zerodha.tech</li>
                        <li  className="font-medium text-base text-[#666] ">Press & media</li>
                        <li  className="font-medium text-base text-[#666] ">Zerodha Cares (CSR)</li>
                    </ul>
                </div>
                <div className="w-[22%]">
                    <p className="text-lg font-medium text-[#424242] mb-5">Support</p>
                    <ul className="flex flex-col gap-2">
                        <li  className="font-medium text-base text-[#666] ">Contact us</li>
                        <li  className="font-medium text-base text-[#666] ">Support portal</li>
                        <li  className="font-medium text-base text-[#666] ">Z-Connect blog</li>
                        <li  className="font-medium text-base text-[#666] ">List of charges</li>
                        <li  className="font-medium text-base text-[#666] ">Downloads & resources</li>
                        <li  className="font-medium text-base text-[#666] ">Videos</li>
                        <li  className="font-medium text-base text-[#666] ">Market overview</li>
                        <li  className="font-medium text-base text-[#666] ">How to file a complaint?</li>
                        <li  className="font-medium text-base text-[#666] ">Status of your complaint</li>
                    </ul>
                </div>
                <div className="w-[22%]">
                    <p className="text-lg font-medium text-[#424242] mb-5">Account</p>
                    <ul className="flex flex-col gap-2">
                        <li  className="font-medium text-base text-[#666] ">Open an account</li>
                        <li  className="font-medium text-base text-[#666] ">Fund transfer</li>
                    </ul>
                </div>
                
            </div>
            
            <div className="text-[10px] font-[#9b9b9b] mt-10">
			<p className="mb-3 w-full leading-5">
			Zerodha Broking Ltd.: Member of NSE, BSE​ &amp;​ MCX – SEBI
			Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
			Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
			– SEBI Registration no.: INZ000038238 Registered Address: Zerodha
			Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
			School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
			any complaints pertaining to securities broking please write to
			<a  className="text-[#387ed1]" href="mailto:complaints@zerodha.com">complaints@zerodha.com</a>, for
			DP related to <a  className="text-[#387ed1]" href="mailto:dp@zerodha.com">dp@zerodha.com</a>. Please
			ensure you carefully read the Risk Disclosure Document as prescribed by
			SEBI | ICF
			</p>
			<p className="mb-3 w-full leading-5">
			Procedure to file a complaint on <a  className="text-[#387ed1] font-medium" href="https://scores.sebi.gov.in/" target="_blank">SEBI SCORES</a>:
			Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number,
			E-mail ID.
			Benefits: Effective Communication, Speedy redressal of the grievances
			</p>
			<p className="mb-3 w-full leading-5">
				<a  className="text-[#387ed1] font-medium" href="https://smartodr.in/" target="_blank">Smart Online Dispute Resolution</a> | <a  className="text-[#387ed1] font-medium" href="https://zerodha-common.s3.ap-south-1.amazonaws.com/Downloads-and-resources/Smart%20ODR%20info.pdf" target="_blank">Grievances Redressal Mechanism</a>
			</p>
			<p className="mb-3 w-full leading-5">
			Investments in securities market are subject to market risks; read all the related documents carefully before investing.
			</p>
			<p className="mb-3 w-full leading-5">
			Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
			</p>
			<p className="mb-3 w-full leading-5">
			"Prevent unauthorised transactions in your account. Update your mobile
			numbers/email IDs with your stock brokers. Receive information of your
			transactions directly from Exchange on your mobile/email at the end of
			the day. Issued in the interest of investors. KYC is one time exercise
			while dealing in securities markets - once KYC is done through a SEBI
			registered intermediary (broker, DP, Mutual Fund etc.), you need not
			undergo the same process again when you approach another intermediary."
			Dear Investor, if you are subscribing to an IPO, there is no need to
			issue a cheque. Please write the Bank account number and sign the IPO
			application form to authorize your bank to make payment in case of
			allotment. In case of non allotment the funds will remain in your bank
			account. As a business we don't give stock tips, and have not authorized
			anyone to trade on behalf of others. If you find anyone claiming to be
			part of Zerodha and offering such services, please  
			<a className="text-[#387ed1] font-medium" href="https://support.zerodha.com/category/your-zerodha-account/your-profile/articles/how-do-i-place-a-complaint-at-zerodha">  create
				a ticket here</a>.
			</p>
            <div className="flex flex-row justify-center">

            <ul className="flex flex-row gap-2">
            <li className="mr-5 text-xs font-medium text-[#666]">NSE</li>
            <li className="mr-5 text-xs font-medium text-[#666]">BSE</li>
            <li className="mr-5 text-xs font-medium text-[#666]">MCX</li>
            <li className="mr-5 text-xs font-medium text-[#666]">Terms & conditions</li>
            <li className="mr-5 text-xs font-medium text-[#666]">Policies & procedures</li>
            <li className="mr-5 text-xs font-medium text-[#666]">Privacy policy</li>
            <li className="mr-5 text-xs font-medium text-[#666]">Disclosure</li>
            <li className="mr-5 text-xs font-medium text-[#666]">For Inverstor's attention</li>
            <li className="mr-5 text-xs font-medium text-[#666]">Investor charter</li>
            </ul>
            </div>
            </div>
        </div>
        </section>
  )
}

export default Footer