import React from 'react';
import PropTypes from 'prop-types';

const MessageError = props => {

    let error = () => {
        switch(props.error) {
            case 'Network Error': return 'No hay conexión con internet.';
            default: return 'Se produjo un error. Inténtalo de nuevo más tarde.';
        }
    }

    return (
        <p>{error()}</p>
    );
};
 
MessageError.propTypes = {
    error: PropTypes.string.isRequired
};

export default MessageError;