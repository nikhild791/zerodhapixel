import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Landing'
import Ecosystem from './components/Ecosystem'
import Pricing from './components/Pricing'
import FreeEdu from './components/FreeEdu'
import Kite from './components/Kite'
import Footer from './components/Footer'

function App() {

  return (
   <>
   <Navbar/>
   <div className='block top-20 -z-10'>
   <Hero/>
   <Ecosystem/>
   <Pricing/>
   <FreeEdu/>
   <Kite/>
   <Footer/>
   </div>
   </>
  )
}

export default App
