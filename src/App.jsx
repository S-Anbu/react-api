import './App.css'
import React from 'react'

function App() {
  return (
    <>
    <h1>QR CODE GENERATOR</h1>
    <div className='wraper'>
      <label htmlFor="userdata">User data</label>
      <input type="text"  id='userdata' />
      <label htmlFor="userdata">QR Code size</label>
      <input type="text" id='userdata' />
    </div>
    <dir>
      <button className='button1' type="button">Generate QR</button>
      <button className='button2' type="button">Download QR</button>
    </dir>
    </>
  )
}

export default App
