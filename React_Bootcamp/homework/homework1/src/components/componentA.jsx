import React, { Component } from "react";
import PropTypes from 'prop-types';

class Contacto extends Component {
    render() {
        return (
            <div></div>
        );
    }
}

Contacto.propTypes = {
    name: PropTypes.string,
    lastName: PropTypes.string,
    email:PropTypes.string,
    conected: PropTypes.bool,
}