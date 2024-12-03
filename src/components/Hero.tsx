import Button from "./ui/Button"

const Hero = () => {
  return (
    <div className="landing-section absolute  flex justify-center items-center w-full">
        <div className="mt-16">
            <div>
                <img className="max-h-[45vh] mb-[60px]" src="/src/assets/images/landing.png" alt="Zerodha dhink dhin dha" />
            </div>
            <div className="mb-10">
                <p className="font-medium text-5xl leading-normal text-center">Invest in everything</p>
                <p className="font-normal text-xl leading-9 text-center tracking-wider">Online platform to invest in stocks, derivaties, mutual funds, etfs, bonds and more.</p>
            </div>
            <div className="flex items-center w justify-center mt-6">
                <Button width="1/3" text="Sign up for free"/>
            </div>
        </div>
    </div>
  )
}

export default Hero