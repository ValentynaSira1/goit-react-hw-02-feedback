import React from "react";
import PropTypes from 'prop-types';

export const Notification = ({message}) => {
return(
    <h3 className="title">{message}</h3>
);
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}