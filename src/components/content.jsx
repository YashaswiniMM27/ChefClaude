import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsListComponent from "./IngredientsList"
import { getRecipeFromMistral } from "../../ai.js"

function Content(){

    const [ingredients, setIngredients] = React.useState([])

    const [recipe, setRecipe] =React.useState(false)

    const [loading, setLoading] = React.useState(false);

    const recipeSection = React.useRef(null)

    React.useEffect(() => {
        if(recipe !== "" && recipeSection.current !== null){
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    }, [recipe])

    function AddIngredients(formData){
        const newIngredient = formData.get("ingredient")
        if(newIngredient)
        {
            const formattedIngredient = newIngredient.charAt(0).toUpperCase() + newIngredient.slice(1)
            if(!ingredients.includes(formattedIngredient)){
                setIngredients(prev => [...prev, formattedIngredient])
            }
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        AddIngredients(formData);
        e.target.reset();
    }

    async function getRecipe(ingredientsArr){
        setLoading(true)
        const generatedRecipe = await getRecipeFromMistral(ingredientsArr)
        setRecipe(generatedRecipe)
        setLoading(false)

    }

    return(
        <div className="wrapper">

            <form className="inputSection" onSubmit={handleSubmit}>
                <input type="text" placeholder="e.g. oregano" name="ingredient" />
                <button >+ Add ingredient</button>
            </form>

            { ingredients.length > 0 &&
            <IngredientsListComponent
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                    ref={recipeSection}
            />}

            {loading && <div className="loader">
                            <img src="/src/assets/loader.gif" alt="Loading..." />
                        </div>}
            {!loading && recipe && <ClaudeRecipe recipe={recipe}/>}

        </div>
        
    )
}

export default Content
