import React from "react";

const IngredientsListComponent = React.forwardRef((props, ref) => {
    const ingredientsList = props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ));

    return (
        <section className="ingredientsSection">
            <span className="ingredientsHeader">Ingredients on hand:</span>
            <ul>{ingredientsList}</ul>
            {props.ingredients.length > 3 && (
                <div className="getRecipeContainer" ref={ref}>
                    <div className="getRecipeTextContainer">
                        <span className="getRecipeHeader">Ready for a recipe?</span>
                        <p className="getRecipeText">Generate a recipe from your list of ingredients</p>
                    </div>
                    <button
                        className="recipeButton"
                        onClick={() => props.getRecipe(props.ingredients)}
                    >
                        Get a recipe
                    </button>
                </div>
            )}
        </section>
    );
});

export default IngredientsListComponent;
