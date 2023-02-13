import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';
import TicTacToe from './TicTacToe';

const App = (props) => {
  const profile = {
    name: 'Jerry',
    email: 'jerry@seinfeld.com',
    address: 'NY!',
  }

  return <div className="app">
    <Profile profile={profile} />
    <div className="dark-mode">
      <h1>Dark Mode</h1>
    </div>
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