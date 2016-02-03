import React, {Component} from 'react';
import {Link} from 'react-router';

class NotFoundPage extends Component {
    
    render() {
        return (
            <div className="container" style={{textAlign: "center"}}>
                <h1>404</h1>
                <h3>Page not found</h3>
                <Link to="/" className="btn btn-default">Back to the Recipe List</Link>
            </div>
        );
    }
}

export default NotFoundPage;
    