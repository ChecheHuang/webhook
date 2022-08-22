import './app.scss'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import NearbyBus from './pages/NearbyBus/NearbyBus'
import SearchBus from './pages/SearchBus/SearchBus'
function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/searchBus" element={<SearchBus />} />
          <Route path="/nearbyBus/:id" element={<NearbyBus />} />
        </Routes>
      </HashRouter>
    </>
  )
}
export default App
