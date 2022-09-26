import "./styles.css"


export type PerfilProps = {
    avatar: string,
    name: string,
    funcao:string,
}

export function Perfil(props: PerfilProps){
    return(
        <div className="perfil">
            <img src={props.avatar} alt="" />
            <p><strong>{props.name}</strong></p>
            <p><small>{props.funcao}</small></p>
        </div>
    )
}