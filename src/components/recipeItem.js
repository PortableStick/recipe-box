import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

const RecipeItem = (props) => (
            <li key={props.index}
                className="recipeItem">
                <Link to={"recipe/" + props.index} key={"Link" + props.index}>
                    <span className="recipeName">
                        {props.recipeItem.name}</span>
                    <span className={props.recipeItem.description ? "recipeDescription" : ""}>
                        {props.recipeItem.description}</span>
                </Link>
            </li>);

RecipeItem.propTypes = {
        recipeItem: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired
    };

export default RecipeItem;
