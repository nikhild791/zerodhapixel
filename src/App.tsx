import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ecosystem from './components/Ecosystem'

function App() {

  return (
   <>
   <Navbar/>
   <div className='relative top-20'>
   <Hero/>
   <Ecosystem/>
   </div>
   </>
  )
}

export default App
