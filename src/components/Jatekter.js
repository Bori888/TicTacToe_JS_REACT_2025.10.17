import React from 'react'
import Elem from './Elem'
import "./Jatekter.css"

export default function Jatekter(props) {
    return (
        <>
            <h2>Jatéktér</h2>
            <div className="Jatekter">
                {
                    props.lista.map((adat, index) => {
                        return (
                            <Elem adat={adat} key={index} katt={props.katt} index={index}/>
                        )
                    })
                }

            </div>

        </>

    )
}
