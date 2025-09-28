import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Catagories from './Components/Catagories/Catagories'
import Navbar from './Components/Navbar'
import Shoes from './Components/Shoes/Shoes'
import Backpack from './Components/Backpack/Backpack'
import Footer from './Components/Footer/Footer'

const fetchPromise = fetch('shoes.json').then(res => res.json())
const backpackPromise = fetch('backpack.json').then(res=>res.json())

function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main>
        <Catagories></Catagories>
        <div className='w-11/12 mx-auto bg-[#F4F4F4] p-5 rounded-4xl'>
          <Suspense>
          <Shoes fetchPromise={fetchPromise}></Shoes>
        </Suspense>
        <Suspense>
          <Backpack backpackPromise={backpackPromise}></Backpack>
        </Suspense>
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App
