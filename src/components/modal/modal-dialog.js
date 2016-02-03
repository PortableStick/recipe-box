import React, {Component, PropTypes} from 'react';
import Modal from './modal';
import ModalBody from './modal-body';
import $ from 'jquery';

let _promise = $.Deferred;

class ModalDialog extends Component {

    static propTypes = {
        confirmLabel: PropTypes.string,
        abortLabel: PropTypes.string,
        description: PropTypes.string,
        message: PropTypes.string.isRequired
    };

    static defaultProps = {
        confirmLabel: 'OK',
        abortLabel: 'Cancel',
    };

    abort() {
        return this.promise.reject();
    }

    confirm() {
        return this.promise.resolve();
    }

    componentDidMount() {
        this.promise = new _promise();
    }
    
    render() {
        return (
            <Modal>
                <div className="modal-header">
                    <h4 className="modal-title">
                        {this.props.message}
                    </h4>
                </div>
                {this.props.description ? 
                    (<ModalBody description={this.props.description} />)
                    : null
                }
                <div className="modal-footer">
                    <div className="text-right">
                        <button role='abort' type='button' className='btn btn-danger' onClick={this.abort.bind(this)} >{this.props.abortLabel}</button>
                        <button role='confirm' type='button' className='btn btn-success' onClick={this.confirm.bind(this)} >{this.props.confirmLabel}</button>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default ModalDialog;
