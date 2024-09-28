import React from 'react';
// import PropTypes from 'prop-types';

export default function Alert(props) {
    if (props.alert === null) {
        return null;
    }
    return (
        <>
            {props.alert &&(
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                {props.alert.msg}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            )}
        </>
    )
}

 
