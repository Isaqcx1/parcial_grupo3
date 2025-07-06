import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../css/componentereserva1.module.css";
import logo from "../img/logo.png";

export function Reservaciones2() {
    const navigate = useNavigate();
    const location = useLocation();


    const sedeSeleccionada = location.state?.sedeSeleccionada || "";

    const [showDropdown, setShowDropdown] = useState(false);
    const [personas, setPersonas] = useState(null);

    const handleSelect = (cantidad) => {
        setPersonas(cantidad);
        setShowDropdown(false);



        navigate("/reservaciones3", {
            state: {
                sedeSeleccionada: sedeSeleccionada,
                cantidadPersonas: cantidad,
            },
        });

    };

    return (
        <div className={styles.fondo}>

            <div className={styles.logoTop}>
                <img src={logo} />
            </div>


            <div className={styles.pasos}>
                <span onClick={() => navigate("/reservaciones1")} className={styles.mouse}>Sedes</span>
                <span className={styles.activo}>Personas</span>
                <span>Fecha</span>
                <span>Hora</span>
                <span>Datos</span>
            </div>


            <div className={styles.main}>
                <div
                    className={styles.sedeBox}
                    onClick={() => setShowDropdown(!showDropdown)}
                >
                    {personas ? `${personas} Personas` : "Cantidad de Personas"}
                </div>

                {showDropdown && (
                    <div className={styles.dropdown}>
                        {[2, 3, 4, 5, 6, 7].map((num) => (
                            <div
                                key={num}
                                className={styles.dropdownItem}
                                onClick={() => handleSelect(num)}
                            >
                                {num} Personas
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
