import React from "react"
import ClaudeRecipe from "./components/ClaudeRecipe"
import IngredientsListComponent from "./components/IngredientsList"

function Content(){

    const [ingredients, setIngredients] = React.useState([])

    const [recipeShown, setRecipeShown] =React.useState(false)

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

    function IsRecipeShown(){
        setRecipeShown(prevShown => !prevShown)
    }

    return(
        <div className="wrapper">

            <form className="inputSection" action={AddIngredients} >
                <input type="text" placeholder="e.g. oregano" name="ingredient" />
                <button >+ Add ingredient</button>
            </form>

            { ingredients.length > 0 &&
            <IngredientsListComponent
                    ingredients={ingredients}
                    recipeToggle={IsRecipeShown}
            />}

            {recipeShown && <ClaudeRecipe/>}

        </div>
        
    )
}

export default Content
