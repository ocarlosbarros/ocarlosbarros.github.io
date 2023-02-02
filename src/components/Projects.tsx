import { Heading } from "./Heading";

import { Card } from "./Card";
import { CardProps } from './Card';

import projects from '../data/project';

export function Projects() {
    console.log(projects);
    return (
        <section className="text-black">
            <Heading text="Projetos" />
            {
                projects.map(({title, image, description, labels }: CardProps) => {
                    return <Card key={title} title={title} image={image} labels={ labels } description={description} />
                })


            }

        </section>
    )
}
