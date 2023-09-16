import './estilo.css'

export default function Horarios() {
    return (
        <section id='horarios' className='container-horario'>
            <h2 className='horario-titulo'>HORÁRIOS DE FUNCIONAMENTO</h2>
                <ul className='horario-tab'>
                    <li className='horario-tab-li'>
                        <p className='horario-dia'>Segunda</p>
                        <div className='horario-traço'></div>
                        <p className='horario-horario-fechado'>FECHADO</p>
                    </li>
                    <li className='horario-tab-li'>
                        <p className='horario-dia'>Terça</p>
                        <div className='horario-traço'></div>
                        <p className='horario-horario'>09:00 - 22:00</p>
                    </li>
                    <li className='horario-tab-li'>
                        <p className='horario-dia'>Quarta</p>
                        <div className='horario-traço'></div>
                        <p className='horario-horario'>09:00 - 22:00</p>
                    </li>
                    <li className='horario-tab-li'>
                        <p className='horario-dia'>Quinta</p>
                        <div className='horario-traço'></div>
                        <p className='horario-horario'>09:00 - 22:00</p>
                    </li>
                    <li className='horario-tab-li'>
                        <p className='horario-dia'>Sexta</p>
                        <div className='horario-traço'></div>
                        <p className='horario-horario'>09:00 - 22:00</p>
                    </li>
                    <li className='horario-tab-li'>
                        <p className='horario-dia'>Sábado</p>
                        <div className='horario-traço'></div>
                        <p className='horario-horario'>09:00 - 22:00</p>
                    </li>
                    <li className='horario-tab-li'>
                        <p className='horario-dia'>Domingo</p>
                        <div className='horario-traço'></div>
                        <p className='horario-horario'>12:00 - 22:00</p>
                    </li>
                </ul>
        </section>
    )
}