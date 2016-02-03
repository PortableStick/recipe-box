import React, {Component} from 'react';
import {Link} from 'react-router';
import RecipeStore from '../stores/recipeBoxStore';
import Actions from '../actions/recipeBoxActions';
import toastr from 'toastr';

class RecipeForm extends Component {
    
    constructor() {
        super();
        this.state = {
            recipe: {
                "name": "",
                "ingredients": [{
                    "ingredientName": "",
                    "quantity": ""
                    }
                ],
                "instructions": [""],
                "description": ""
            },
            lastIndex: ''
        };
    }

    componentWillMount() {
        if(this.props.params.id) {
            this.setState({
                recipe: RecipeStore.getRecipeByIndex(this.props.params.id)
            });
        } else {
            this.setState({
                lastIndex: RecipeStore.getLastIndex()
            });
        }
    }

    setOptional(index, event) {
        if(event.target.checked) {
            this.state.recipe.ingredients[index].optional = true;
            this.setState({
                recipe: this.state.recipe
            });
        } else {
            this.state.recipe.ingredients[index].optional = false;
            this.setState({
                recipe: this.state.recipe
            });
        }
    }

    updateRecipeText(event) {
        this.state.recipe[event.target.name] = event.target.value;
        this.setState({
            recipe: this.state.recipe
        });
    }

    updateIngredients(index, event) {
        this.state.recipe.ingredients[index][event.target.name] = event.target.value;
        this.setState({
            recipe: this.state.recipe
        });
    }

    updateInstructions(index, event) {
        this.state.recipe.instructions[index] = event.target.value;
        this.setState({
            recipe: this.state.recipe
        });
    }

    saveRecipe = () => {

        this.state.recipe.ingredients = this.state.recipe.ingredients.filter((x) => {
            return x.ingredientName && x.quantity;
        });

        this.state.recipe.instructions = this.state.recipe.instructions.filter((x) => {
            return x.length > 0;
        });


        if(this.props.params.id) {
            //update existing recipe
            Actions.updateRecipe(this.state.recipe, this.props.params.id);
            toastr.success("Recipe updated");
        } else {
            //save new recipe
            Actions.newRecipe(this.state.recipe);
            toastr.success("Recipe added");
        }
    };

    addIngredient = () => {
        this.state.recipe.ingredients.push({
                    "ingredientName": "",
                    "quantity": ""
                    });
        this.setState({
            recipe: this.state.recipe
        })
    };

    addInstructionStep = () => {
        this.state.recipe.instructions.push("");
        this.setState({
            recipe: this.state.recipe
        });
    };

    createIngredientForms = (ingredient, index) => {

        let Button = () => {
            return (<div></div>);
        }

        if(index === this.state.recipe.ingredients.length - 1) {
            Button = () => {
                return (<div className="btn btn-default input-group-addon" onClick={this.addIngredient}>+</div>);
            }
        }

        return (
            <div key={"group" + index} className="form-group form-inline">
                <div className="form-group">
                    <input key={index+"nameInput"} type="text" className="form-control" placeholder="Ingredient" value={ingredient.ingredientName} name="ingredientName" onChange={this.updateIngredients.bind(this, index)} />
                    <input  key={index+"quantityInput"} type="text" className="form-control" placeholder="Quantity" value={ingredient.quantity} name="quantity" onChange={this.updateIngredients.bind(this, index)} />
                </div>
                <div className="form-group">
                    <input key={index+"optionalCheckbox"+ingredient.ingredientName} type="checkbox" name="optionalCheckbox" onChange={this.setOptional.bind(this, index)} checked={ingredient.optional ? true : null}/>
                    <label for="optionalCheckbox">optional?</label>
                </div>
                <Button />
            </div>
        )
    };

    createInstructionList = (instruction, index) => {
        let num = index + 1,
            Button = () => {
            return (<div></div>);
        }

        if(index === this.state.recipe.instructions.length - 1) {
            Button = () => {
                return (<div className="btn btn-default input-group-addon" onClick={this.addInstructionStep}>+</div>);
            }
        }

        return (
            <div className="form-group" key={"step" + index}>
                <input key={"keystep" + num} type="text" className="form-control" placeholder={"step " + num} value={instruction} name="instruction" onChange={this.updateInstructions.bind(this, index)} /> 
                <Button />
            </div>
        );
    };


    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Recipe name:</label>
                        <input type="text" className="form-control" placeholder="Recipe Name" value={this.state.recipe.name} onChange={this.updateRecipeText.bind(this)} name="name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea rows="3" className="form-control" placeholder="Recipe Description" onChange={this.updateRecipeText.bind(this)} name="description" defaultValue={this.state.recipe.description} />
                    </div>
                    {this.state.recipe.ingredients.map(this.createIngredientForms)}
                    {this.state.recipe.instructions.map(this.createInstructionList)}
                </form>
                <div className="controls row">
                    <Link to={this.props.params.id ? "/recipe/" + this.props.params.id : "/"} className="btn btn-danger col-xs-12 col-md-4">Cancel</Link>
                    <Link to={this.props.params.id ? "/recipe/" + this.props.params.id : "/recipe/" + this.state.lastIndex} className="btn btn-success col-xs-12 col-md-4 col-md-offset-4" onClick={this.saveRecipe}>Save</Link>
                </div>
            </div>
        );    
    }
}

export default RecipeForm;
