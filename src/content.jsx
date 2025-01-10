import React from "react"

function Content(){

    const [ingredients, setIngredients] = React.useState([])

    const ingredientsList = ingredients.map(ingredient => (
        <li key={ingredient}>{(ingredient)}</li>
    ))

    function AddIngredients(formData){
        const newIngredient = formData.get("ingredient")
        if(newIngredient)
        {setIngredients(prev => [...prev, newIngredient.charAt(0).toUpperCase() + newIngredient.slice(1)])}
    }

    return(
        <div className="wrapper">
            <form className="inputSection" action={AddIngredients} >
                <input type="text" placeholder="e.g. oregano" name="ingredient" />
                <button >+ Add ingredient</button>
            </form>
            <section className="ingredientsSection">
                {ingredients.length > 0 && <span className="ingredientsHeader">Ingredients on hand:</span>}
                <ul>
                    {ingredientsList}
                </ul>
            </section>
        </div>
        
    )
}

export default Content

