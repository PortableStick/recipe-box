import React, {Component} from 'react';
import RecipeBoxStore from '../stores/recipeBoxStore';
import RecipeList from './recipeList';
import {Link} from 'react-router';

class RecipeBoxManager extends Component {

    constructor() {
        super();
        this.state = {
            recipes: RecipeBoxStore.getAllRecipes()
        };
    }

    componentWillMount() {
        this.setState({
            recipes: RecipeBoxStore.getAllRecipes()
        });
    }

    render() {
        return (
            <div className="container">
                <RecipeList recipeItems={this.state.recipes} />
                <Link to="addRecipe" className="btn btn-default col-xs-12 col-md-4 col-md-offset-4" >Add Recipe</Link>
            </div>
        );
    }
}

export default RecipeBoxManager;
