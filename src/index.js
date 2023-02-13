import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';
import TicTacToe from './TicTacToe';
import DarkMode from './DarkMode'

const App = (props) => {
  const profile = {
    name: 'Jerry',
    email: 'jerry@seinfeld.com',
    address: 'NY!',
  }

  return <div className="app">
    <Profile profile={profile} />
    <DarkMode />
    <TicTacToe />
    <div className="todo">
      <h1>Todo</h1>
    </div>
  </div>
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);