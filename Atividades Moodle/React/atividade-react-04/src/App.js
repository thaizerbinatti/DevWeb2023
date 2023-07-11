import React from 'react';
import Nome from './components/Nome';
import Nota from './components/Nota';

function App() {
  const notas = [8.5, 9.0, 7.5, 8.0];
  const nomeAluna = 'Helena';

  return (
    <div>
      <Nome nome={nomeAluna} />
      <Nota notas={notas} />
    </div>
  );
}

export default App;

