import React from 'react'

function Home() {
    const logout = ()=>{
        localStorage.clear()
        window.location.reload()
    }
  return (
    <div>
        <h1>Home</h1>
        <p>hello dear friends am glad you were able to access this file to learn more on this call me through my number</p>
        <button onClick={logout}>logout</button>
    </div>
  )
}

export default Home