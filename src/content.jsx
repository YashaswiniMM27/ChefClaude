import React from "react"

function Content(){

    const [ingredients, setIngredients] = React.useState([])

    const ingredientsList = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        if(newIngredient)
        {setIngredients(prev => [...prev, newIngredient])}
        event.currentTarget.reset()
    }

    return(
        <div>
            <form className="inputSection" onSubmit={handleSubmit} >
            <input type="text" placeholder="e.g. oregano" name="ingredient" />
            <button >+ Add ingredient</button>
            </form>
            <section>
                <ul>
                    {ingredientsList}
                </ul>
            </section>
        </div>
        
    )
}

export default Content

