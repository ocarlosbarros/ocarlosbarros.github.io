import { ReactNode } from "react";

interface ContentProps {
    children: ReactNode | Array<ReactNode>
    className?: string
}

export function Content({ children, className } : ContentProps ) {
    return (
        <section className={className}>
            { children }
        </section>
    );
}
