import { useState } from 'react'
import './App.css'
import Page from './Page'

function App() {
  const [count, setCount] = useState(0)

  // constdataJS = [
  //   {
  //     famille: "types de donnees",
  //     parent: "first",
  //     superTitre: "Javascript",
  //     titre: "Les types de données",
  //     syntax: "aa",
  //     code: "zz",
  //     text: "ee",
  //     explication: "rr"
  //   },
  //   {
  //     famille: "types de donnees",
  //     parent: "first",
  //     superTitre: "Valeurs",
  //     titre: "primitives",
  //     syntax: "tt",
  //     code: "rr",
  //     text: "Tous les types, sauf les objets, définissent des valeurs immuables (qu'on ne peut modifier).",
  //     explication: "Tous les types, sauf les objets, définissent des valeurs immuables (qu'on ne peut modifier). Ainsi, contrairement au C, les chaînes de caractères sont immuables en JavaScript. Les valeurs immuables pour chacun de ces types sont appelées « valeurs primitives »."
  //   },
  //   {
  //     famille: "types de donnees",
  //     parent: "first",
  //     superTitre: "Valeurs",
  //     titre: "objets",
  //     syntax: "ii",
  //     code: "yy",
  //     text: "En informatique, un objet est une valeur conservée en mémoire à laquelle on fait référence grâce à un identifiant.",
  //     explication: ""
  //   },
  //   {
  //     famille: "type",
  //     parent: "Valeurs primitives",
  //     titre: "booléen",
  //     syntax: "true / False",
  //     code: "yy",
  //     text: "oo",
  //     explication: "uu"
  //   },
  //   {
  //     famille: "Nombres",
  //     parent: "Nombre",
  //     titre: "Nombre",
  //     text: "yy",
  //     explication: "nous disposons même de plusieurs systèmes de numération ! Le décimal a pour base 10 (ce qui signifie qu'il se sert de chiffres entre 0 et 9 dans chaque rang), mais il en existe d'autres"
  //   }
  // ]

  return (
    <>
      <Page />
      <h1> Ici c'est app</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
