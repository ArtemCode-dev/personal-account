import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Profile />
      </div>
    </div>
  );
}

export default App;
