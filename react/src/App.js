import './app.scss'
import { useDispatch, useSelector } from 'react-redux'
import { update } from './redux/userSlice'
import { useEffect } from 'react'

function App() {
  const dispatch = useDispatch()
  const userInfo = useSelector((state) => state.user.userInfo)
  const name = 'carl'
  const email = 'carl@gmail.com'
  useEffect(() => {
    dispatch(update({ name, email }))
  }, [dispatch])
  console.log(userInfo)
  return <div className="App">我兩分鐘後在看</div>
}
export default App
