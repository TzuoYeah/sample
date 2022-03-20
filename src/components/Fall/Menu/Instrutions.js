import react  from "react"

export default function Instrutions({title, steps})
{
    return(
        <section className="instrutions">
            <h3>{title}</h3>
            {steps.map((s,i)=>(
                <p key={i}>{s}</p>
            ))}
        </section>
    )
}