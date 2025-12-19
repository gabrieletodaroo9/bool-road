import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import DefaultLayout from './layouts/DefaultLayout'
import HomePage from './pages/HomePage'
import JourneyPage from './pages/JourneyPage'
import database from "../data"
import { useState } from 'react'

function App() {


  const [data, setData] = useState(database)

  return (
    <>

      <BrowserRouter>

        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' index element={<HomePage data={data} setData={setData} />} />
            <Route path='/:id' element={<JourneyPage data={data} setData={setData} />} />
          </Route>
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
