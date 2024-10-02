import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import WatchList from './components/WatchList'
import { Routes, Route } from 'react-router-dom'
import WatchListContextWrapper from './context/WatchListContext'
// import User from './components/User'
// import UserRedux from './components/UserRedux'

function App() {

  return (
    <>
      {/* <User /> */}
      {/* <UserRedux /> */}
      <NavBar />
      <WatchListContextWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes> 
      </WatchListContextWrapper>
    </>
  )
}

export default App
