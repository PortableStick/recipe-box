import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class RecipeItem extends Component {
    static propTypes = {
        recipeItem: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired
    };

    render() {
        return (
            <li key={this.props.index}
                className="recipeItem">
                <Link to={"recipe/" + this.props.index} key={"Link" + this.props.index}>
                    <span className="recipeName">
                        {this.props.recipeItem.name}</span>
                    <span className={this.props.recipeItem.description ? "recipeDescription" : ""}>
                        {this.props.recipeItem.description}</span>
                </Link>
            </li>
        );
    }
}

export default RecipeItem;
