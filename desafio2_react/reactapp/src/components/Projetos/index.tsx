import "./styles.css"

type Project = {
    link:string
}

export function Project(props:Project){

    return (
        <div className="project">
            <p>Projetos</p>
            <a href={props.link}>Veja todos</a>
        </div>
    )
}