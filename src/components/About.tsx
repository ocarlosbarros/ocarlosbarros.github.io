import { Heading } from "./Heading";
import { Content } from "./Content";

import { GithubLogo, LinkedinLogo, InstagramLogo } from 'phosphor-react';

import profileImage from '../assets/profile.png';

export function About() {
    return (
        <Content className="text-black w-full h-screen p-5 flex">
            <div className="w-1/2 h-screen">
                <div className="h-[91.2%] flex items-center justify-center">
                   <div className="text-center h-[50%] p-5 text-lg">
                        <Heading text="Olá" />
                        <p className="p-1">
                            Olá, sou Carlos Barros. Iniciei minha trajetório em tecnologia em 2015
                            através do curso de Sistemas para Internet pela FATEC-Carapicuíba. Formado
                            em Desenvolvimento Web pela Trybe, apaixonado por tecnologia, por aprender coisas novas e desafios. Busco com a tecnologia trazer impacto positivo para as pessoas e para sociedade.
                        </p>
                        <p className="p-1">
                            Olá, sou Carlos Barros. Iniciei minha trajetório em tecnologia em 2015
                            através do curso de Sistemas para Internet pela FATEC-Carapicuíba. Formado
                            em Desenvolvimento Web pela Trybe, apaixonado por tecnologia, por aprender coisas novas e desafios. Busco com a tecnologia trazer impacto positivo para as pessoas e para sociedade.
                        </p>
                        <p className="p-1">Criando conteúdo em vídeo no Youtube</p>
                    </div>
                </div>
            </div>
            <div className="w-1/2 h-[100%] flex flex-col justify-center items-center ">
                <div className="flex-col justify-center items-center h-1/2 m-4 align-middle">
                <img className="m-auto h-[350px]" src={profileImage} alt="" />
                    <p className="text-center mt-8 text-4xl" >Carlos Barros</p>
                </div>
                <div className="flex justify-center">
                    <a href="https://github.com/ocarlosbarros" target="_blank"><GithubLogo size={62} /></a>
                    <a href="https://www.linkedin.com/in/ocarlosbarros/" target="_blank"><LinkedinLogo size={64} /></a>
                    <a href="https://www.instagram.com/o_carlosbarros/" target="_blank"><InstagramLogo size={62} /></a>
                </div>
            </div>
        </Content>
    )
}
