import React from "react"
import StarButton from "./contactPractice.jsx";

//object setState
export default function ContactCard() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })


    function toggleFavorite() {
        setContact(prev => {
            return{
                ...prev,
                isFavorite: !prev.isFavorite
            }
        })
    }

    return (
        <main>
            <article className="card">
                <img
                    src="/src/assets/user.webp"
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">

                    <StarButton isFilled={contact.isFavorite} handleClick={toggleFavorite}/>

                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}


//Conditional Rendering 1
export function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)

    function IsShown(event){
        event.preventDefault()
        setIsShown(prevShown => !prevShown)
    }



    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown ? <p>{props.punchline}</p> : null}
            <button onClick={IsShown}>{!isShown ? "Show" : "Hide"} punchline</button>
            <hr />
        </div>
    )
}


//Passing states as props
export function Count(props){
    console.log("Count Rendered")
    return(
        <h2 className="count">{props.number}</h2>
    )
}
