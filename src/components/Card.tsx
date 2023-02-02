export interface CardProps {
    id?: number;
    title: string;
    image: string;
    labels : Array<string>
    description: string;

}
export function Card({ title, image, labels, description }: CardProps) {
    return (
        <article className="w-[426px] h-[550px] border" >
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
                {labels.map((label) => <span>{ label }</span>)}
            </div>
        </article>
    );
}
