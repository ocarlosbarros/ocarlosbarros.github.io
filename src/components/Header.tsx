import { Menu } from "./Menu";

import { MouseSimple, CaretDoubleDown } from 'phosphor-react';

export function Header() {
    return (

        <header className="flex-col bg-gradient-to-b from-primary to-secondary">
            <div className="h-screen bg-no-repeat bg-cover bg-waves border-primary">
            <Menu />
            <div className="flex flex-wrap justify-center items-end w-full h-[80%]">
                <h1 className="text-6xl">Olá, eu sou o <span className="text-highlight">Carlos Barros</span></h1>
                <div className="flex w-full justify-center items-center">
                    <a href="#about" className="flex-column relative top-5 right-3 cursor-pointer">
                        <MouseSimple className="rotate-180 relative left-1" size={30} />
                        <CaretDoubleDown className="animate-bounce relative top-2" size={38} />
                    </a>
                    <a href="#about" className="cursor-pointer"><p className="text-2xl">Saiba mais</p></a>
                </div>
                </div>
            </div>
        </header>

    );
}
