//index.js file(playing with react components)
import React from 'react';
import ReactDOM from 'react-dom/client';
import HelloApp from './App'
ReactDOM.createRoot(document.getElementById('app')).render(<HelloApp/>)

//App.js file
import React from 'react';
import HelloWorld from './HelloWorld'

function HelloApp() {
  <HelloWorld/>
  return <h1>Hello World</h1>
}
export default HelloApp;
//hello.js file
import React from 'react';
function HelloWorld() {
  return <h1>Hello World</h1>;
}
export default HelloWorld;
//playing with props
//player.js

import React from 'react';

function Player(props) {
  return (
    <>
      <h1>{props.songName}</h1>
      <h2>{props.artist}</h2>
    </>
  );
}
export default Player;

//app.js

import React from 'react';
import Player from './Player';

function App() {
 return <Player songName="Closer" artist="chainsmokers"/>

}

export default App;