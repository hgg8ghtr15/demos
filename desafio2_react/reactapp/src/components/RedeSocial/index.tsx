import "./styles.css"

export type RedeSocialPropos = {
    key: number,
    redeAvatar: string,
    redeNome: string,
    redeLink: string,
}

export function RedeSocial<T> (props: RedeSocialPropos){
    return (
        <li className="rede">
            <img src={props.redeAvatar} alt="" />
            <a href={props.redeLink}>{props.redeNome}</a>
        </li>
    )
}