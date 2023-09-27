import React from "react";
import './Scoreboard.css'
import fundo from '../assets/fundo.avif'


function Scoreboard({ pontuacaoJogador, pontuacaoComputador, empate }) {
  return (
    <div>
      <h2>PLACAR</h2>
      <p>Jogador: {pontuacaoJogador}</p>
      <p>Computador: {pontuacaoComputador}</p>
      <p>Empates: {empate}</p>
    </div>
  );
}

export default Scoreboard;