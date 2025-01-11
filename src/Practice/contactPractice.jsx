import starEmpty from "../assets/star-empty-icon.png";
import starFilled from "../assets/star-filled.webp";

export default function StarButton(props){

        let starIcon = props.isFilled ? starFilled : starEmpty
    
    return(
        <button
            onClick={props.handleClick}
            aria-pressed={props.isFilled}
            aria-label= {props.isFilled ? "Add to favorite" : "Remove from favorite"}
            className="favorite-button"
        >
            <img
                src={starIcon}
                alt={props.isFilled ? "Filled Star" : "Empty Star"}
                className="favorite"
            />
        </button>
    )
}