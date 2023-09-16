import './estilo.css'

export default function Footer () {
    return (
        <footer>
            <div className='rodape'>
                <div >
                    <a href='#topo'><img className='botaoVoltar' src='../assets/seta-para-cima.png' alt='bVoltar'/></a>
                </div>
                <p className='dReservados'>&copy; Manhattan - Coffee House - Todos os direitos reservados </p>
                <p className='dReservados'>Desenvolvido por <span>David Beckham</span></p>
            </div>
        </footer>
    )
}