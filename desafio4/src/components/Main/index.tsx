import "./styles.css"

type Main ={
    url:string
}

export function Main (props: Main){
    return(
        <div className="div">
            <img 
            className="imagem"
            src={props.url} alt="" />
            <h2>Ambiente <strong className="colorred"> único </strong>  para voçê!</h2>
            <p>Nos criamos um ambinte 
                <strong className="colorred"> excluisvo e único</strong>
                com bom gosto e profissionalismo, investimos 
                <strong className="colorred"> tempo e dedicação.</strong>
            </p>
            <p>
                Tenha um 
                <strong className="colorred"> ambiente limpo </strong>
                 e bem decorado, 
                 <strong className="colorred"> elegancia e finesse </strong>
                 transmitindo para todo aquele que estiver ali.
            </p>
        </div>
    )
}