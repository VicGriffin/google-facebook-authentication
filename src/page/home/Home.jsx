import React from 'react'

function Home() {
    const logout = ()=>{
        localStorage.clear()
        window.location.reload()
    }
  return (
    <div>
        <h1>Home</h1>
        <button onClick={logout}>logout</button>
    </div>
  )
}

export default Home