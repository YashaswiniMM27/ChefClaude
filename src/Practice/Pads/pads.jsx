import React from "react"
import padsData from "./pads.js"

export default function Pads({}) {

    const [pads, setPads] = React.useState(padsData)

    const padsList = pads.map(pad => {
        return <button style={{ backgroundColor: pad.color, opacity: pad.on? 1 : 0.1}} key={pad.id} onClick={() => toggleButton(pad.id)}></button>
    }
    )

    function toggleButton(id){
        setPads(prevPads => prevPads.map((pad) => pad.id === id ? { ...pad, on: !pad.on } : pad))
    }

    function turnAllPadsOff(){
        setPads(prevPads => prevPads.map(pad => (
            {
                ...pad,
                on: false
            }
        )
        ))
    }

    return (
        <main>
            <div className="pad-container">
                {padsList}
                <button className="offButton" onClick={turnAllPadsOff}>Turn all off</button>
            </div>
        </main>
    )
}