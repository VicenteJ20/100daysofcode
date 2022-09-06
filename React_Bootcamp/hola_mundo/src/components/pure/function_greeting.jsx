import React, { useState } from 'react';
import PropTypes from 'prop-types';



const FunctionGreeting = (props) => {

    //Introudcción a useState
    // const [variable, método para actualizarlo] = useState(valor inicial)
    const [age, setAge] = useState(20);

    const birthday = () => {
        // actualizando el state
        setAge(age + 1);
    }

    return (
        <div>
            <div>
                <h1>Hola { props.name } desde componente funcional!!!</h1>
                <h2>Tu edad actual es: { age }</h2>
                <div>
                    <button onClick={birthday}>Aumentar edad </button>
                </div> 
            </div>
        </div>
    );
};


FunctionGreeting.propTypes = {
    name: PropTypes.string,
};


export default FunctionGreeting;
