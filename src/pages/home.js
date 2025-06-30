
import styles from "../components/componente1.module.css"
import { Link, useNavigate } from "react-router-dom";

//imagenes
import logo from '../img/logo.png';
import centro1 from '../img/centro1.png';
import img8 from '../img/img8.jpg';
import img9 from '../img/img9.png';
import img10 from '../img/img10.png';
import img11 from '../img/img11.png';



export function Home() {
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

            <div className={styles.base1}>
                <img src={img8} className={styles.base1imagen} />
                <img src={centro1} className={styles.base1imagencentro} />
            </div>

            <div className={styles.base2}>
                <div className={styles.infoSection}>
                    <div className={styles.imageGrid}>
                        <img src={img9} className={styles.gridImageA} />
                        <img src={img10} className={styles.gridImageP} />
                        <img src={img11} className={styles.gridImageP} />
                    </div>

                    <div className={styles.textContent}>
                        <h2 className={styles.title}>Todo empieza aquí</h2>
                        <p><strong>Todo empezó con una mesa vacía y las ganas de llenarla.<br />
                            No con grandes planes, sino con el deseo de volver a lo simple.</strong></p>

                        <p>
                            Pan que huele a casa.<br />
                            Sal que no se nota, pero falta.<br />
                            Aprendimos a cocinar como quien escribe:<br />
                            con fuego lento, con intención, sin adornos innecesarios.<br />
                            Aquí no hay recetas exactas, pero sí cuidado.<br />
                            Platos que hablan bajito, que no presumen, pero quedan.<br />
                            Porque a veces, la belleza está justo ahí:<br />
                            en lo que no se explica, en lo que simplemente se sirve.<br />
                            Y el arte… en lo que se comparte sin decir palabra.
                        </p>

                        <p className={styles.linkText}>Descubre más de nosotros</p>
                    </div>
                </div>

            </div>

            <div className={styles.footer}>
                <div className={styles.footerSection}>
                    <p>Política de privacidad</p>
                    <p>Términos y condiciones</p>
                    <p>Libro de reclamaciones</p>
                </div>

                <div className={styles.footerCenter}>
                    <img src={logo}className={styles.footerLogo} />
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