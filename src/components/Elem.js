import React from 'react'
import "./Elem.css"
export default function Elem(props) {

    function katt(){
        
        props.katt(props.index)
    }


    return (
        <div className="Elem" onClick={katt} >{props.adat}</div>
    )
}
