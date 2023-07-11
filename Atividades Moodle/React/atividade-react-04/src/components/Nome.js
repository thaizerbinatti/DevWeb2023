import React from 'react';

const Nome = ({ nome }) => {
    const estilo = {
        border: '2px solid black',
        color: 'blue',
        textAlign: 'center',
    };

    return (
        <div style={estilo}>
            <h1>{nome}</h1>
        </div>
    );
};

export default Nome;
