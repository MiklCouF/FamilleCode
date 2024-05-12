import AffichageCard from "./AffichageCard"
import '../index.css'

function Card({ dataJsTitre, dataJssyntax, dataJscode, dataJstext, dataJsexplication }) {

    return (
        <>
            <div className="card-parent">
                <h3>{dataJsTitre}</h3>
                <p>
                    {dataJssyntax}
                    <br />
                    {dataJscode}
                    <br />
                    {dataJstext}
                    <br />
                    {dataJsexplication}
                </p>
                <AffichageCard />
            </div>
        </>
    )
}

export default Card