function Content(){

    const ingredients = ["Tomato", "Oregano", "Chicken"]

    const ingredientsList = ingredients.map((ingredient) => {
        return (<li key={ingredient}>
        {ingredient}
        </li>)
    })

    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIng = formData.get("ingredient")
        ingredients.push(newIng)
        console.log(ingredients)
    }


    return(
        <div>
            <form className="inputSection" onSubmit={handleSubmit} name="ingredient">
            <input type="text" placeholder="e.g. oregano" name="ingredient" />
            <button>+ Add ingredient</button>
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