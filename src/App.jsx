import { useState } from 'react'
import { Route,BrowserRouter,Routes } from 'react-router-dom'
import Login from './login/Login'
import Signup from './signup/Signup'
import Header from './components/header/Header'
import './App.css'
import Home from './page/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     < BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Signup/>}></Route>
      <Route path='/' element={<Home/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
