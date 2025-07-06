import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/componentereserva1.module.css";
import logo from "../img/logo.png";

export function Reservaciones1() {
  const [selectedSede, setSelectedSede] = useState(null);
  const navigate = useNavigate();

  const sedes = ["Sede Lima", "Sede Arequipa", "Sede Cusco"];

  const handleSelectSede = (sede) => {
    setSelectedSede(sede);



    navigate("/reservaciones2", {
      state: {
        sedeSeleccionada: sede,
      },
    });
  };

  return (
    <div className={styles.fondo}>

      <div className={styles.logoTop}>
        <img src={logo} />
      </div>



      <div className={styles.pasos}>
        <span className={styles.activo}>Sedes</span>
        <span>Personas</span>
        <span>Fecha</span>
        <span>Hora</span>
        <span>Datos</span>
      </div>


      <div className={styles.main}>
        <h2 className={styles.titulo}>Selecciona tu sede</h2>
        <div className={styles.sedesContainer}>
          {sedes.map((sede) => (
            <div
              key={sede}
              className={`${styles.sedeBox} ${selectedSede === sede ? styles.selected : ""
                }`}
              onClick={() => handleSelectSede(sede)}
            >
              {sede}
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}
