import './estilo.css'

export default function Header (){
    return (
        <header id='topo'>
            <div className='topo secao-limite'>
                <img className='logotipo' src='/assets/logo.png' />
                <nav className='links-nav'>
                    <a className='link-nav' href='#informacoes' alt='' >INFORMAÇÕES</a>
                    <a className='link-nav' href='#contato' alt='' >CONTATOS</a>
                    <a className='link-nav' href='#horarios' alt='' >HORÁRIOS</a>
                </nav>
            </div>
        </header>
    )
}