import React, { useState } from 'react';
import Intro from './components/Intro';
import Quiz from './components/Quiz';
import "./scss/App.scss"

function App() {
  const [isFirstGame, setIsFirstGame] = useState(true)

  const blobBackground = (
    <>
      <div className="blob upper">
        <svg width="194" height="197" viewBox="0 0 194 197" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M99.4095 81.3947C71.1213 50.8508 33.3179 21.7816 37.1727 -19.6933C41.4394 -65.599 75.854 -105.359 118.419 -123.133C158.797 -139.994 206.035 -130.256 241.822 -105.149C271.947 -84.0141 272.823 -43.8756 282.141 -8.27104C292.17 30.0508 318.521 70.8106 296.501 103.779C273.538 138.159 224.991 143.432 183.931 138.768C148.318 134.723 123.751 107.677 99.4095 81.3947Z" fill="#FFFAD1" />
        </svg>
      </div>
      <div className="blob lower">
        <svg width="194" height="197" viewBox="0 0 194 197" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M99.4095 81.3947C71.1213 50.8508 33.3179 21.7816 37.1727 -19.6933C41.4394 -65.599 75.854 -105.359 118.419 -123.133C158.797 -139.994 206.035 -130.256 241.822 -105.149C271.947 -84.0141 272.823 -43.8756 282.141 -8.27104C292.17 30.0508 318.521 70.8106 296.501 103.779C273.538 138.159 224.991 143.432 183.931 138.768C148.318 134.723 123.751 107.677 99.4095 81.3947Z" fill="#DEEBF8" />
        </svg>
      </div>
    </>
  )

  function startFirstGame() {
    setIsFirstGame(false)
  }

  return (
    <div className="app">
      {blobBackground}
      {
        isFirstGame ?
          <Intro handleClick={startFirstGame} /> :
          <Quiz />
      }
    </div>
  );
}

export default App;
