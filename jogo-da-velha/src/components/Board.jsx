import React, { useEffect, useState } from 'react'
import Square from './Square';

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext,setxIsNext] = useState(true);
    const [aiIsThinking, setAiIsThinking] = useState(false);
    const winner = calculateWinner(squares);
    const [modGameDuo,setModGameDuo] = useState(false);
    const [velha,setVelha] = useState(false);

    useEffect(() => {
      if(!modGameDuo){
        if (!xIsNext && !winner) {
          setAiIsThinking(true);
          setTimeout(() => {
            aiMove(squares, setSquares, setxIsNext,resetGame);
            setAiIsThinking(false);
          }, 800);
        }
      }        
      }, [xIsNext, squares, winner, modGameDuo]);

    const handleClick = (i) => {
        if(squares[i] || winner || aiIsThinking) return;
        const newArray = squares.slice();
        newArray[i] = xIsNext ? "X" : "O";
        setSquares(newArray)
        setxIsNext(!xIsNext);
    }

    const resetGame = () =>{
        setSquares(Array(9).fill(null))
        setxIsNext(true)
        setModGameDuo(false)
    }
  return (
    <div style={{ display:"flex",flexDirection:"column",alignItems:"center" }}>
        <h1 className='titulo'>Jogo da Velha</h1>
        <div className="status">
        Status:{" "}
        {winner ? (
          <p className="winner">O vencedor é: {winner}!</p>
        ) : (
          `Próximo a jogar: ${xIsNext ? "X" : "O"}`
        )}
      </div>
      <p className='status_mod'>
        {modGameDuo ? "Agora você pode jogar com um amigo" : "Agora você está jogando com um robô"}
      </p>

      <div className='board_row'>
            <Square value={squares[0]} onClick={()=>handleClick(0)}/>
            <Square value={squares[1]} onClick={()=>handleClick(1)}/>
            <Square value={squares[2]} onClick={()=>handleClick(2)}/>
      </div>
      <div className='board_row'>
            <Square value={squares[3]} onClick={()=>handleClick(3)}/>
            <Square value={squares[4]} onClick={()=>handleClick(4)}/>
            <Square value={squares[5]} onClick={()=>handleClick(5)}/>
      </div>
      <div className='board_row'>
            <Square value={squares[6]} onClick={()=>handleClick(6)}/>
            <Square value={squares[7]} onClick={()=>handleClick(7)}/>
            <Square value={squares[8]} onClick={()=>handleClick(8)}/>
      </div>
      <div style={{ display:"flex",marginTop:"1em",gap:"1em",flexWrap:"wrap", justifyContent:"center" }}>
        <p>Troque o modo de jogo:</p>
        <button
        onClick={()=>setModGameDuo(!modGameDuo)}
        >{modGameDuo ? "robô" : "amigo"}</button>
      </div>
        <button className='button_reset' onClick={resetGame}>Reiniciar</button>
    </div>
  )
}

const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
  
    return null;
  };

  const aiMove = (squares, setSquares, setXIsNext, resetGame) => {
     // Array para armazenar as posições nulas
  const posicoesNulas = [];

  // Identificar as posições nulas
  for (let i = 0; i < squares.length; i++) {
    if (!squares[i]) {
      posicoesNulas.push(i);
    }
  }

  // Verificar se há posições nulas
  if (posicoesNulas.length > 0) {
    // Escolher aleatoriamente uma posição nula
    const posicaoAleatoria = posicoesNulas[Math.floor(Math.random() * posicoesNulas.length)];

    // Modificar a lógica original para preencher a posição aleatória
    const newSquares = squares.slice();
    newSquares[posicaoAleatoria] = "O";
    setSquares(newSquares);
    setXIsNext(true);
  }else{
    alert("velha")
    resetGame();
  }
  };

export default Board