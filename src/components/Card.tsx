export interface CardProps {
    id?: number;
    title: string;
    image: string;
    labels : Array<string>
    description: string;

}
export function Card({ title, image, description }: CardProps) {
    return (
        <article className="bg-white shadow-gray-400 shadow-lg w-[426px] h-[550px] flex-col items-center m-4 p-8" >
            <img src={image} alt="" />
            <h3 className="text-2xl mt-2 mb-2">{title}</h3>
            <p className="m2">{description}</p>
        </article>
    );
}
