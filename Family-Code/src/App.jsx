import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Page from './Page'

function App() {
  const [count, setCount] = useState(0)

  constdataJS = [
    {
      famille: "types de donnees",
      parent: "first",
      superTitre: "Javascript",
      titre: "Les types de données",
      syntax: "",
      code: "",
      text: "",
      explication: ""
    },
    {
      famille: "types de donnees",
      parent: "first",
      superTitre: "Valeurs",
      titre: "primitives",
      syntax: "",
      code: "",
      text: "Tous les types, sauf les objets, définissent des valeurs immuables (qu'on ne peut modifier).",
      explication: "Tous les types, sauf les objets, définissent des valeurs immuables (qu'on ne peut modifier). Ainsi, contrairement au C, les chaînes de caractères sont immuables en JavaScript. Les valeurs immuables pour chacun de ces types sont appelées « valeurs primitives »."
    },
    {
      famille: "types de donnees",
      parent: "first",
      superTitre: "Valeurs",
      titre: "objets",
      syntax: "",
      code: "",
      text: "En informatique, un objet est une valeur conservée en mémoire à laquelle on fait référence grâce à un identifiant.",
      explication: ""
    },
    {
      famille: "type",
      parent: "Valeurs primitives",
      titre: "booléen",
      syntax: "true / False",
      code: "",
      text: "",
      explication: ""
    },
    {
      famille: "Nombres",
      parent: "Nombre",
      titre: "Nombre",
      text: "",
      explication: "ous disposons même de plusieurs systèmes de numération ! Le décimal a pour base 10 (ce qui signifie qu'il se sert de chiffres entre 0 et 9 dans chaque rang), mais il en existe d'autres"
    },
    {
      parent: nombres,
      titre: "",
      syntax: "",
      code: "",
      text: "",
      explication: ""
    },
    {
      parent: nombres,
      titre: "",
      text: "",
      explication: ""
    },
    {
      parent: nombres,
      titre: "",
      text: "",
      explication: ""
    }

  ]

  return (
    <>
      <Page />
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />

        <img src={reactLogo} className="logo react" alt="React logo" />

      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
