import React from 'react';
import ReactDOM from 'react-dom';
import RecipeBoxActions from './actions/recipeBoxActions';
import {Router, Route, IndexRoute, browserHistory, NotFoundRoute} from 'react-router';
import App from './components/app';
import RecipeBoxManager from './components/recipeBoxManager';
import RecipeDisplay from './components/recipeDisplay';
import RecipeForm from './components/recipeForm';
import NotFoundPage from './components/notFoundPage';

RecipeBoxActions.init();

ReactDOM.render(<Router history={browserHistory}>
                    <Route path="/recipe-box" component={App}>
                        <IndexRoute component={RecipeBoxManager} />
                        <Route path="/recipe/:id" component={RecipeDisplay} />
                        <Route path="/addRecipe" component={RecipeForm} />
                        <Route path="/editRecipe/:id" component={RecipeForm} />
                        <Route path="*" component={NotFoundPage} />
                    </Route>
                  </Router>, document.getElementById('app'));