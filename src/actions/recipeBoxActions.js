import Dispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';
import initData from '../data/initData.json';

const recipeBoxActions = {
    init: () => {
        let recipes, 
            localData = JSON.parse(localStorage.getItem('recipes'));
        //Test whether data exists in local storage
        if(localData) {
            //load local storage if so
            recipes = localData;
        } else {
            //load initData if not
            recipes = initData;
        }

        let payload = {
            actionType: ActionTypes.INITIALIZE,
            recipes: recipes
        }
        Dispatcher.dispatch(payload);
    },

    newRecipe: (newRecipe) => {
        let payload = {
            actionType: ActionTypes.CREATE_RECIPE,
            newRecipe: newRecipe
        }
        Dispatcher.dispatch(payload);
    },

    updateRecipe: (recipe, index) => {
        let payload = {
            actionType: ActionTypes.UPDATE_RECIPE,
            recipe: recipe,
            index: index
        }

        Dispatcher.dispatch(payload);
    },

    deleteRecipe: (index) => {
        let payload = {
            actionType: ActionTypes.DELETE_RECIPE,
            index: index
        }

        Dispatcher.dispatch(payload);
    }
};

export default recipeBoxActions;