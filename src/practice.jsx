import React from "react"
import starEmpty from "./assets/star-empty-icon.png";
import starFilled from "./assets/star-filled.webp";

//object setState
export function ContactCard() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    let starIcon = contact.isFavorite ? starFilled : starEmpty

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
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={contact.isFavorite}
                        aria-label= {contact.isFavorite ? "Add to favorite" : "Remove from favorite"}
                        className="favorite-button"
                    >
                        <img
                            src={starIcon}
                            alt={contact.isFavorite ? "Filled Star" : "Empty Star"}
                            className="favorite"
                        />
                    </button>
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
export default function Joke(props) {
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
