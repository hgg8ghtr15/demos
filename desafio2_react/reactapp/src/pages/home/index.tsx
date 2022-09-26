import React,{useState, useEffect} from 'react'
import {Perfil, PerfilProps} from "../../components/Perfil"
import {Project} from '../../components/Projetos'
import {RedeSocial, RedeSocialPropos} from '../../components/RedeSocial'

// import {LogoSvgGit } from '../../assets/github.svg'

import './styles.css'


const links = [
    {key:1,redeNome:"Facebook",redeLink:"https://www.facebook.com", redeAvatar:"X"},
    {key:2,redeNome:"Facebook",redeLink:"https://www.facebook.com", redeAvatar:"X"},
    {key:3,redeNome:"Facebook",redeLink:"https://www.facebook.com", redeAvatar:"X"},
    {key:4,redeNome:"Facebook",redeLink:"https://www.facebook.com", redeAvatar:"X"},

]

export function Home(){

    const [perfil, setperfil] = 
        useState<PerfilProps>({
            name: 'fabio',
            funcao:'Analista de sistemas',
            avatar:'https://avatars.githubusercontent.com/u/31228896?s=400&u=7f223828cb142d2489d7f28d47e01f17cb02dd4a&v=4'
        }
    )
    const [social, setsocial] = useState<RedeSocialPropos[]>([...links])
        
   return (

    <main className='containner'>
        <section className='navebar'>
            <Perfil 
                name={perfil.name}
                funcao={perfil.funcao}
                avatar={perfil.avatar}       
            />
            
            <ul className='redeSocial'>
                {
                    social.map(rede =>(
                        <RedeSocial
                            key={rede.key}
                            redeNome={rede.redeNome}
                            redeAvatar={rede.redeAvatar}
                            redeLink={rede.redeLink}
                        />  
                    ))

                }
            </ul>
        </section>
        <section className='conteudo'>
            <Project 
                link={"#"}
            />
        </section>
    </main>

   ) 
}