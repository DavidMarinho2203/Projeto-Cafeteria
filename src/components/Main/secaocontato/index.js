import './estilo.css'

export default function Contato() {
    return (
        <section id='contato' className='container-cnt'>
            <h2>Contatos & Endereço</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.013088586082!2d-43.36814522514352!3d-22.986546179199003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda293e673b27%3A0xc823a7a4acbf3512!2sAv.%20Ayrton%20Senna%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1685888855891!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            <div className='container-inf'>
                <p className='infs'>Telefone & Whatsapp: <a href="tel:21999995555" target="_blank"> (21) 99999-5555</a></p>
                <p className='infs'>E-mail: <a href="mailton:contato@manhattan.com.br" target="_blank"> contato@manhattan.com.br </a></p>
                <p className='infs'>Endereço: <a href="https://www.google.com/maps?output=search&q=Av+Ayrton+Senna,+3000+-+Barra+da+Tijuca+-+Rio+de+Janeiro&source=lnms&entry=mc&sa=X&ved=2ahUKEwi_gJvayqiAAxU4pZUCHS2OCtwQ0pQJegQIChAB" target="_blank"> Av Ayrton Senna, 3000 - Barra da Tijuca - Rio de Janeiro </a></p>
            </div>

        </section>
    )
}