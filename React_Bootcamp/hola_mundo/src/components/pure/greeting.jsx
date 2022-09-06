import React, { Component } from "react";
import PropTypes from 'prop-types';

class Greeting extends Component {

    constructor(props){
        super(props);
        this.state = {
            age : 20
        }
    }

    render() {
        return (
            <div>
                <h1>Hola { this.props.name } </h1>
                <h2>Tu edad es: { this.state.age } años</h2>
                <div>
                    <button onClick={this.birthday}>Aumentar edad </button>
                </div>
            </div>
        );
    }

    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age + 1
            }
        ));
    }
}

Greeting.propTypes = {
    name: PropTypes.string,
};

export default Greeting;