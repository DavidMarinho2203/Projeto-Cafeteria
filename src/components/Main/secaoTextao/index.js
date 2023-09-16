import './estilo.css'

export default function Textao(props) {
    return(
        <section className='secao-limite container-txt'>
                <h2>{props.titulo}</h2>
                <p>{props.frase}</p>
        </section>
    )
}
