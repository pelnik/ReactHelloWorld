import React from 'react';
import TicTacToeCell from './TicTacToeCell';

const board = [
  'x', null, 'o', 
  'o', 'x', null,
  'x', 'o', null
];

const TicTacToe = () => {
  return (
    <div className="tic-tac-toe">
      <div className="board"> {
        board.map((item, index) => {
          return <TicTacToeCell key={index} char={item} />
        })
      }
      </div>
    </div>
  )

  // return (
  //   <div className="tic-tac-toe">
  //     <div className="board"> {
  //     board.map((item, index) => {
  //       return <div className="cell" key={index}><span>{item}</span></div>
  //     })
  //   }
  //   </div>
  // </div>

  // )

  
}

export default TicTacToe;