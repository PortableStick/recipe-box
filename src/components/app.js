import React, {Component} from 'react';
import Header from './header';
import RecipeBoxManager from './recipeBoxManager';

const App = (props) => (
            <div>
                <Header />
                {props.children}
            </div>
        );

export default App;
