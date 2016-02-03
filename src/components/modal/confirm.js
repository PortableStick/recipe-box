import React from 'react';
import ReactDOM from 'react-dom';
import ModalDialog from './modal-dialog';

export default (message, options = {}) => {
  Object.assign(options, {message: message});
  const cleanup = () => {
    ReactDOM.unmountComponentAtNode(wrapper);
    wrapper.remove();
  };

  const wrapper = document.body.appendChild(document.createElement('div')),
        component = ReactDOM.render(<ModalDialog {...options} />, wrapper);

  return component.promise.always(cleanup).promise();
};
