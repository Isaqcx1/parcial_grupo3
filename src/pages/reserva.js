import styles from "../components/componente3.module.css"
import { Link, useNavigate } from "react-router-dom";
import logo from '../img/logo.png';


import img12 from '../img/img12.png';

export function Reserva() {
    //recurso
    const navigate = useNavigate()

    //ir al home
    const handlerRedirectHome = () => {
        navigate('/home')
    }

    //ir a la reservas 
    const handlerRedirectReserva = () => {
        navigate('/reserva')
    }

    //Ir a las reservaciones 

    const handlerRedirectReservaciones = () => {
        navigate('/reservaciones1')
    }

    //ir al contacto 
    const handlerRedirectContacto = () => {
        navigate('/contactos')
    }


    return (
        <body>
            <nav className={styles.navbar}>
                <div className={styles.menu}>
                    <a className={styles.link}>Historia</a>
                    <a className={styles.link}>Carta</a>
                    <a className={styles.link}>Servicios</a>
                </div>

                <div className={styles.logo}>
                    <img src={logo} />
                </div>

                <div className={styles.menu}>
                    <a onClick={handlerRedirectHome} className={styles.link}>Inicio</a>
                    <a onClick={handlerRedirectReserva} className={styles.link}>Reservas</a>
                    <a onClick={handlerRedirectContacto} className={styles.link}>Contactos</a>
                </div>

            </nav>







            <div className={styles.reservaSection}>
                <div className={styles.reservaText}>
                    <h2><span className={styles.titulo}>Sabor Quieto.</span></h2>
                    <p>
                        Comida que se queda. Como el recuerdo. Como el amor.<br />
                        En Sabor Quieto, cada plato es un fragmento de historia,<br />
                        cada sorbo es la voz de alguien que aún canta en la cocina.<br />
                        Cocinamos lento, servimos con alma.<br />
                        Porque la tradición no se apura. Se honra.
                    </p>

                    <h2><span className={styles.titulo}>Reservaciones.</span></h2>
                    <p>
                        Puedes reservar tu mesa con antelación hasta para grupos de 1 a 6 personas, con tres meses de anticipación.<br />
                        Estamos recibiendo reservas hasta diciembre 2025.<br /><br />
                        Nuestros precios incluyen IGV y el 12% de servicio.<br /><br />
                        Los ingredientes, como los días, pueden cambiar.<br />
                        Pero la esencia… esa no se toca.<br /><br />
                        Si vienes con más gente, escríbenos:<br />
                        <strong>reservas@saborquieto.pe</strong>
                    </p>

                    <button onClick={handlerRedirectReservaciones} className={styles.boton}>Reservar ahora</button>
                </div>

                <div className={styles.reservaImg}>
                    <img src={img12}/>
                </div>
            </div>


















            <div className={styles.footer}>
                <div className={styles.footerSection}>
                    <p>Política de privacidad</p>
                    <p>Términos y condiciones</p>
                    <p>Libro de reclamaciones</p>
                </div>

                <div className={styles.footerCenter}>
                    <img src={logo}  className={styles.footerLogo} />
                    <div>
                        <p>Av. El Sol 145, La Molina, Lima</p>
                        <p>+51 912 345 678</p>
                        <p>hola@comidaquieta.pe</p>
                    </div>

                </div>

                <div className={styles.footerSection}>
                    <p>Lunes a sábado</p>
                    <p>Almuerzo: 12:30 – 14:00</p>
                    <p>Cena: 19:00 – 21:30</p>
                    <br />
                    <p>Domingos cerramos para respirar un poco</p>
                </div>
            </div>


        </body>
    )


}