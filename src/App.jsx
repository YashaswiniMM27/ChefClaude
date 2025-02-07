import React from "react"
import './index.css'
import Content from "../src/components/content.jsx"
import Header from "../src/components/header.jsx"


function App() {

    return(
        <>
        <Header/>
        <Content/>
        </>
    )
}



//Exercise renditions


/*
//Pads App
return(
    <Pads/>
)
}
*/




/*
//Passing states as props (Count App)
const [count, setCount] = React.useState(0)

    function add() {
        setCount(prevCount => prevCount + 1)
    }

    function subtract() {
        setCount(prevCount => prevCount - 1)
    }

    console.log("App Rendered")

    return (
        <main className="container">
            <div className="counter">
                <button
                    className="minus"
                    onClick={subtract}
                    aria-label="Decrease count"
                >-</button>

                <Count number={count}/>

                <button
                    className="plus"
                    onClick={add}
                    aria-label="Increase count"
                >+</button>
            </div>
        </main>
    )
}
*/




/*
//Conditional rendering 2 (Unread Messages App)
const [messages, setMessages] = React.useState(["a", "b", "c"])

return (
    <div>
        {
        messages.length === 0 ? <h1>You're all caught up!</h1>
        : <h1>You have {messages.length} message{messages.length === 1 ? "" : "s"}</h1>
        }
    </div>
)
}
*/



/*
Conditional Rendering 1 (Jokes APp)
const jokeElements = jokesData.map(joke => {
    return (
        <Joke
            key={joke.id}
            setup={joke.setup}
            punchline={joke.punchline}
        />
    )
})
return (
    <div>
        {jokeElements}
    </div>
)
}
*/



export default App
