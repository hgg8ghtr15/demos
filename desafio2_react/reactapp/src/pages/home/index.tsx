import React,{useState} from 'react'
import {Perfil, PerfilProps} from "../../components/Perfil"
import {Project} from '../../components/Projetos'

import './styles.css'

// type User = {
    
// }


export function Home(){

    const [perfil, setperfil] = 
        useState<PerfilProps>({
            name: 'fabio',
            funcao:'Analista de sistemas',
            avatar:'https://avatars.githubusercontent.com/u/31228896?s=400&u=7f223828cb142d2489d7f28d47e01f17cb02dd4a&v=4'
        }
    )

   return (

    <main className='containner'>
        <section className='navebar'>
            <Perfil 
                name={perfil.name}
                funcao={perfil.funcao}
                avatar={perfil.avatar}       
            />
        </section>
        <section className='conteudo'>
            <Project 
                link={"#"}
            />
        </section>
    </main>

   ) 
}