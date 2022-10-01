import "./styles.css"

type Footer ={
    link:string,
    rede:string,
}

export function Footer(props : Footer) {
    return (
        <ul>
          <li><a href={props.link}>{props.rede}</a></li>
        </ul>
    )
}