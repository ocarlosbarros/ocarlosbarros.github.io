interface HeadingProps {
    text: string;
}

export function Heading({ text } : HeadingProps) {
    return <h2 id="projects" className="m-20 text-4xl">{text}</h2>
}
