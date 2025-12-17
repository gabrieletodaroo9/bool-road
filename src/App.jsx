import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import DefaultLayout from './layouts/DefaultLayout'
import HomePage from '../pages/HomePage'
import JourneyPage from '../pages/JourneyPage'

function App() {

  return (
    <>

      <BrowserRouter>

        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' index element={<HomePage />} />
            <Route path='/:id' element={<JourneyPage />} />

          </Route>
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
