import React, { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import Board from './layout/Board'
import './index.css';

export class Game extends Component {
   render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
}

export default Game
