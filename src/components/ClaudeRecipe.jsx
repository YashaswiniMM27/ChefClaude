import Markdown from 'react-markdown'
import '../index.css'

export default function ClaudeRecipe(props){
    
    return(
        <article className="suggested-recipe-container">
            <h2>Chef Claude Recommends:</h2>
            <div className="react-markdown">
                <Markdown>{props.recipe}</Markdown>
            </div>
        </article>
    )

}