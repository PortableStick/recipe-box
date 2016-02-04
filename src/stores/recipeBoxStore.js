import {EventEmitter} from 'events';
import Dispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';

const CHANGE_EVENT = 'change';

let _recipes = [];

const recipeBoxStore = Object.assign({}, EventEmitter.prototype, {

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    getAllRecipes: function() {
        return _recipes;
    },

    getRecipeByIndex: function(index) {
        return _recipes[index];
    },
    getLastIndex: function() {
        return _recipes.length;
    }
});

const setRecipes = () => {
    let recipesToStore = JSON.stringify(_recipes);
    localStorage.setItem('recipes', recipesToStore);
};

Dispatcher.register((payload) => {
    switch(payload.actionType) {
        case ActionTypes.INITIALIZE:
            _recipes = payload.recipes;
            recipeBoxStore.emitChange();
            break;
        case ActionTypes.CREATE_RECIPE:
            _recipes.push(payload.newRecipe);
            recipeBoxStore.emitChange();
            setRecipes();
            break;
        case ActionTypes.UPDATE_RECIPE:
            _recipes[payload.index] = payload.recipe;
            recipeBoxStore.emitChange();
            setRecipes();
            break;
        case ActionTypes.DELETE_RECIPE:
            _recipes.splice(payload.index, 1);
            recipeBoxStore.emitChange();
            setRecipes();
            break;
        default:
    }
})

export default recipeBoxStore;