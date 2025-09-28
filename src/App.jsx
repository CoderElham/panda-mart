import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Catagories from './Components/Catagories/Catagories'
import Navbar from './Components/Navbar'
import Shoes from './Components/Shoes/Shoes'

const fetchPromise = fetch('shoes.json').then(res => res.json())

function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main>
        <Catagories></Catagories>
        <Suspense>
          <Shoes fetchPromise={fetchPromise}></Shoes>
        </Suspense>
      </main>
    </>
  )
}

export default App
