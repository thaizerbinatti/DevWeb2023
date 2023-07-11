import React from 'react';

const Nota = ({ notas }) => {
    const calcularMedia = () => {
        const soma = notas.reduce((acc, nota) => acc + nota, 0);
        return (soma / notas.length).toFixed(2);
    };

    return (
        <div>
            <h2>Média: {calcularMedia()}</h2>
        </div>
    );
};

export default Nota;
