interface HeadingProps {
    id: string;
    text: string;
}

export function Heading({ id, text }: HeadingProps) {
    return <h2 id={id} className="m-10 text-4xl">{text}</h2>
}
