import React from "react";

function Scoreboard({ pontuacaoJogador, pontuacaoComputador, empate }) {
  return (
    <div>
      <h2>Placar</h2>
      <p>Jogador: {pontuacaoJogador}</p>
      <p>Computador: {pontuacaoComputador}</p>
      <p>Empates: {empate}</p>
    </div>
  );
}

export default Scoreboard;