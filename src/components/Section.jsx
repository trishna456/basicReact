import { Children } from "react";

export default function Section({title, children, ...props}){ //prop forwarding
    return(
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}