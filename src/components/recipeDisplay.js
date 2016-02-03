import React, {Component} from 'react';
import {Link} from 'react-router';
import RecipeStore from '../stores/recipeBoxStore';
import Actions from '../actions/recipeBoxActions';
import toastr from 'toastr';
import Confirm from './modal/confirm';

class RecipeDisplay extends Component {

    constructor() {
        super();
        this.state = {
            recipe: ''
        }
    }

    createIngredientsList(ingredient, index) {
        return (
            <div className="col-xs-12 col-md-6 ingredient" key={ingredient.ingredientName + 'group'}>
                <span className="ingredient-name" key={ingredient.ingredientName + index}>{ingredient.ingredientName}</span>: <span className="ingredient-quantity" key={ingredient.quantity}>{ingredient.quantity}</span>
            </div>
        );
    }

    createInstructions(instruction, index) {
        return (
            <li key={instruction + index}>{instruction}</li>
        );
    }

    componentWillMount() {
        this.setState({
            recipe: RecipeStore.getRecipeByIndex(this.props.params.id)
        });
    }

    deleteRecipe(index) {
        Actions.deleteRecipe(index);
        toastr.success("Recipe deleted");   
    }

    render() {
        return (
            <div className="container recipe-container">
                <h1>{this.state.recipe.name}</h1>
                <h4>{this.state.recipe.description}</h4>
                <div className="ingredients">
                    <h3>Ingredients</h3>
                    <div className="row ingredients-list">
                        {this.state.recipe.ingredients.map(this.createIngredientsList)}
                    </div>
                </div>
                <div className="instructions">
                    <h3>Instructions</h3>
                    <ol>
                        {this.state.recipe.instructions.map(this.createInstructions)}
                    </ol>
                </div>
               <div className="row controls">
                    <Link to="/" className="col-xs-3 btn btn-default">Back to Recipes</Link>
                    <Link to={"/editRecipe/" + this.props.params.id} className="col-xs-3 col-md-offset-3 btn btn-default">Edit Recipe</Link>
                    <Link to="/" className="col-xs-3 btn btn-danger" onClick={this.deleteRecipe.bind(this, this.props.params.id)}>Delete Recipe</Link>
               </div>
            </div>

        );
    }
}

export default RecipeDisplay;
