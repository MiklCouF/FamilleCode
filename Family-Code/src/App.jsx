import { useState } from 'react'
import './App.css'
import Page from './Page'
import Card from './components/Card'
import Header from './components/Header.jsx'
import { dataJs } from './data.js';

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Header />
      <Page />
      <h1> Ici c'est app</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {dataJs.map((data) => (
          <Card
            key={data.titre}
            dataJsTitre={data.titre}
            dataJssyntax={data.syntax}
            dataJscode={data.code}
            dataJstext={data.text}
            dataJsexplication={data.explication}
          />))}
      </div>
    </>
  )
}

export default App
