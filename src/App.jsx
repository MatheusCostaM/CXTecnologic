import React from 'react'
import './App.css'
import icone from '/icone.png'
import Background from './components/Background'
import MoveSimple from './components/MoveSimple'

function App() {

  return (
    <>
      <MoveSimple><div><img src={icone} alt="" /></div></MoveSimple>
      <Background />
    </>
  )
}

export default App
