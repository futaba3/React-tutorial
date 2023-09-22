import React from 'react';
import { useState } from 'react';

// Squareコンポーネントにpropsとしてvalueという名前の値が渡されるとき
// javascriptの記法に戻るには波括弧{}が必要
function Square({ value, onSquareClick }) {
  return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
  );
}

export default function Board() {
  // 9個のマスに対応する9個のnullを持つ配列を与え、親のBoardがstateを管理
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }
  return (
    <div>
       <div className="board-row">
          {/* propsを受け取る */}
          {/* () =>のアロー関数でhandleClick(0)が呼び出される */}
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
       </div>
       <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
       </div>
       <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
       </div>
    </div>
  );
}
