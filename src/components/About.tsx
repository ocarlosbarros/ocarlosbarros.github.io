import { Heading } from "./Heading";
import { Content } from "./Content";

import { GithubLogo, LinkedinLogo, InstagramLogo } from 'phosphor-react';

import profileImage from '../assets/profile.png';

export function About() {
    return (
        <Content className="text-black w-full h-screen p-5 flex">
            <div className="w-screen h-screen flex">
                <div className="w-1/2 h-screen flex items-center justify-center">
                   <div className="text-center p-5 text-lg">
                        <Heading id="about" text="Olá!" />
                        <div className="text-center">
                            <p className="p-1">
                                Olá, sou Carlos Barros. Sou apaixonado por tecnologia, por aprender coisas novas e por desafios.
                                Encontrei na área de tecnologia uma forma de manter esses desejos e trazer impacto positivo para a vida das pessoas
                                sociedade.
                            </p>
                            <p className="p-1">
                                Iniciei minha trajetória em desenvolvimento de software em 2015 através do curso de Sistemas para Internet pela FATEC
                                ,onde cursei 4 semestres, mas sou formado no curso de Desenvolvimento Web pela Trybe.
                            </p>
                            <p className="p-1">
                                Atualmente buscando oportunidades para impulsionar minha carreira como desenvolvedor
                                front-end, almejando uma carreira de mais técnica e aspirante a criação de conteúdo tech.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 h-100 flex  flex-col items-center">
                    <div className="m-auto">
                        <img className="w-[250px] h-[250px]" src={profileImage} alt="" />
                        <div className="flex justify-center m-4">
                            <a href="https://github.com/ocarlosbarros" target="_blank"><GithubLogo size={50} /></a>
                            <a href="https://www.linkedin.com/in/ocarlosbarros/" target="_blank"><LinkedinLogo size={50} /></a>
                            <a href="https://www.instagram.com/o_carlosbarros/" target="_blank"><InstagramLogo size={50} /></a>
                        </div>
                        <p className="text-center text-3xl" >Carlos Barros</p>
                    </div>
                </div>
            </div>
        </Content>
    )
}
