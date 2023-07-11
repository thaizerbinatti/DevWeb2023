import React from 'react';
import PropTypes from 'prop-types';

const BoasVindas = (props) => {
    const { nome } = props;
    const estilo = {
        color: 'blue',
        fontSize: '20px',
        margin: '10px',
    };

    return (
        <section>
            <h1 style={{ ...estilo }}>Olá sou a {nome}!</h1>
            <p style={{ ...estilo }}>Bem vindo a atividade!</p>
        </section>
    );
};

BoasVindas.defaultProps = {
    nome: 'Visitante',
};

BoasVindas.propTypes = {
    nome: PropTypes.string,
};

export default BoasVindas;
