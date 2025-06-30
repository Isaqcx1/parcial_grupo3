import styles from "../components/componente2.module.css"
import { Link, useNavigate } from "react-router-dom";
import logo from '../img/logo.png';

export function Contactos() {
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


            <div className={styles.footer}>
                <div className={styles.footerSection}>
                    <p>Política de privacidad</p>
                    <p>Términos y condiciones</p>
                    <p>Libro de reclamaciones</p>
                </div>

                <div className={styles.footerCenter}>
                    <img src={logo} className={styles.footerLogo} />
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