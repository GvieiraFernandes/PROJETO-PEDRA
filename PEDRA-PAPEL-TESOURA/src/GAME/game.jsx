import React from "react";
import pedra from '../assets/pedra.png'
import folha from '../assets/folha-de-papel.png'
import tesoura from '../assets/tesoura.png'
import './game.css'


function Game({ playGame }) {
  return (
    <div>
      <h2>Escolha sua opção:</h2>
      <button id="bt-1" onClick={() => playGame("pedra")}> <img id="botao" src={pedra}></img> </button>
      <button id="bt-1" onClick={() => playGame("papel")}> <img  id="botao" src={folha}></img></button>
      <button id="bt-1" onClick={() => playGame("tesoura")}> <img  id="botao" src={tesoura}></img></button>
    </div>
  );
}

export default Game;