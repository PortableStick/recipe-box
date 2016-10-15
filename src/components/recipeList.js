import React, {Component, PropTypes} from 'react';
import RecipeItem from './recipeItem';

function createRecipeList(recipeItem, index) {
    return (
        <RecipeItem recipeItem={recipeItem} index={index} key={index * (Math.random() + 1)}/>
    );
}

const RecipeList = (props) => (
            <div>
                <ul>
                    {props.recipeItems.map(createRecipeList)}
                </ul>
            </div>
        );

RecipeList.propTypes = {
    recipeItems: PropTypes.array.isRequired
};

export default RecipeList;
