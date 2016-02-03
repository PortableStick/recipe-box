import React, {Component, PropTypes} from 'react';

class ModalBody extends Component {
    
    static propTypes = {
        description: PropTypes.string.isRequired
    };

    render() {
        return (
            <div className="modal-body">
                {this.props.description}
            </div>
        );
    }
}

export default ModalBody;
