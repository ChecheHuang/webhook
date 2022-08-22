import './app.scss'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from 'react-router-dom'

function Home() {
  return <div>Home</div>
}
function Test() {
  let { id } = useParams()

  return <div>{id}</div>
}

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/test/:id" element={<Test />} />
        <Route path="*" element={<div>404 not found</div>} />
      </Routes>
    </Router>
  )
}
export default App
