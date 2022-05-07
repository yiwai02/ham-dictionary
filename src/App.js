import React from 'react';
import Header from './Header';
import Dictionary from './Dictionary';

import './App.css';

function App(){
  return(
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Header />
          </header> 
<main>
<Dictionary />
</main>
<footer className="App-footer">
  <img src={require('./pics/kinkumalove.png')} alt="hamster" className="footerHamster" />
   Opensource at <a href ="https://github.com/yiwai02/ham-dictionary" target="blank">Github</a>
</footer>
</div>
</div>
  );
}

export default App;