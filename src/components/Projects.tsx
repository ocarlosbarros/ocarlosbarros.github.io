import { Heading } from "./Heading";
import { Content } from "./Content";

import { Card } from "./Card";
import { CardProps } from './Card';

import projects from '../data/project';

export function Projects() {
    return (
        <Content className="text-black w-full h-screen p-5 flex">
            <div className="text-center p-5 text-lg">
                <Heading id="projects" text="Projetos" />
                <div className="flex flex-wrap items-center justify-center p-2">
                {
                    projects.map(({id, title, image, description, labels }: CardProps) => {
                        return <Card key={id} title={title} image={image} labels={ labels } description={description} />
                    })


                    }
                </div>
            </div>
            </Content>
    )
}
