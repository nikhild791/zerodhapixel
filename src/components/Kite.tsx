import Button from "./ui/Button"

const Kite = () => {
  return (
    <section className="relative pb-20 ">
        <div className="w-[900px] mx-auto text-center">
        <p className="font-medium text-[2rem] leading-6 mb-5 text-[#424242]">Open a Zerodha account</p>
        <p className="mb-4">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
        <div className="mt-5 w-[42vw] rounded-lg flex flex-row justify-center mx-auto">
    <Button text="Sign up for free" width="1/3" />
        </div>
        </div>
        </section>
  )
}

export default Kite