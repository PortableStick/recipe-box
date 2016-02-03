import React, {Component, PropTypes} from 'react';

class Modal extends Component {
    
    render() {
        return (
            <div>
                <div className="modal-backdrop in" />
                <div className="modal" tabIndex='-1' role='dialog' aria-hidden='false' ref='modal' style={{display: 'block'}}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
