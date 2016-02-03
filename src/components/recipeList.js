import React, {Component, PropTypes} from 'react';
import RecipeItem from './recipeItem';

class RecipeList extends Component {

    static propTypes = {
        recipeItems: PropTypes.array.isRequired
    };

    createRecipeList(recipeItem, index) {
        return (
            <RecipeItem recipeItem={recipeItem} index={index} />
        );
    }
    
    render() {
        return (
            <div>
                <ul>
                    {this.props.recipeItems.map(this.createRecipeList)}
                </ul>
            </div>
        );
    }
}

export default RecipeList;
