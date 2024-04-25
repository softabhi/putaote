import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
// import './App.css'
import Login from './componets/login/Login'
import Home from './componets/Home'
import Register from './componets/registration/Register';
import Profile from './componets/profile/Profile';
import HomeOne from './componets/patoto/HomeOne';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<HomeOne/>} />
        {/* <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/profile' element={<Profile/>} /> */}
      </Routes>

    </>
  )
}

export default App
