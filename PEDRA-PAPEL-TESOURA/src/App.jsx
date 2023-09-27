
import React, { useState } from "react";
import Game from "./GAME/game";
import Scoreboard from "./Scoreboard/Scoreboard";
import coracao from "./assets/coracao.png"
import './App.css'


function App() {

  const [jogador, setJogador] = useState(0); 
  const [computador, setComputador] = useState(0); 
  const [resultado, setResultado] = useState(null); 
  const [pontuacaoJogador, setPontuacaoJogador] = useState(0); 
  const [pontuacaoComputador, setPontuacaoComputador] = useState(0); 
  const [empate, setEmpate] = useState(0); 
  
  const choices = ["pedra", "papel", "tesoura"];

  
  const playGame = (choice) => {
 
    const opcaoComputador =
      choices[Math.floor(Math.random() * choices.length)];

    setJogador(choice);
    setComputador(opcaoComputador);

    if (choice === opcaoComputador) {
      setEmpate(empate + 1);
      setResultado("Empate!");
    } else if (
      (choice === "pedra" && opcaoComputador === "tesoura") ||
      (choice === "papel" && opcaoComputador === "pedra") ||
      (choice === "tesoura" && opcaoComputador === "papel")
    ) {
      setPontuacaoJogador(pontuacaoJogador + 1);
      setResultado("Você venceu!");
    } else {
      setPontuacaoComputador(pontuacaoComputador + 1);
      setResultado("O computador venceu!");
    }
  };

  const resetJogo = () => {
    setPontuacaoJogador(0);
    setPontuacaoComputador(0);
    setEmpate(0);
    setResultado(null);

  };
 

  // Renderiza o  App.
  return (
    

    <div className="App">
      {/* Exibe a imagem de fundo */}
    
      {/* Exibe o título do jogo */}
      <h3> I LOVE YOU SANDRINHA <img id="coracao" src={coracao} alt="" /></h3>
      <h1>PEDRA, PAPEL, TESOURA</h1>

      {/* Renderiza o componente Game e passa a função playGame como prop */}
      <Game playGame={playGame} />

      {/* Renderiza o componente Scoreboard e passa as pontuações e empates como props */}
      <Scoreboard
        pontuacaoJogador={pontuacaoJogador}
        pontuacaoComputador={pontuacaoComputador}
        empate={empate}
      />

      {/* Exibe o resultado da rodada e um botão para jogar novamente */}
      {resultado && (
        <div>
          <p>{resultado}</p>
          <button id="bt-2" onClick={resetJogo}>Jogar Novamente</button>
        </div>
      )}
    </div>
  );
}

// Exporta o componente App como o componente padrão deste arquivo.
export default App;