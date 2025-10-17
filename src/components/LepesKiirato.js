import React from 'react'
import "./LepesKiirato.css"

export default function LepesKiirato(props) {
  return (
    <div><h1>Lépések:</h1>
        <p>Következő játékos: {props.allapot}</p>
        <p>A {props.lepes}.lépésnél tartunk</p>
    </div>
  )
}
