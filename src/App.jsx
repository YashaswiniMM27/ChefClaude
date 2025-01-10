import React from "react"
import Content from "./content.jsx"
import Header from "./header.jsx"
// import jokesData from './practice.js'
// import Joke from "./practice.jsx"

function App() {

  return(
    <>
    <Header/>
    <Content/>
    </>
  )
}
















// const [messages, setMessages] = React.useState(["a", "b", "c"])

// return (
//     <div>
//         {
//           messages.length === 0 ? <h1>You're all caught up!</h1>
//           : <h1>You have {messages.length} message{messages.length === 1 ? "" : "s"}</h1>
//         }
//     </div>
// )


// const jokeElements = jokesData.map(joke => {
//   return (
//       <Joke
//           key={joke.id}
//           setup={joke.setup}
//           punchline={joke.punchline}
//       />
//   )
// })
// return (
//   <div>
//       {jokeElements}
//   </div>
// )
// }


export default App
