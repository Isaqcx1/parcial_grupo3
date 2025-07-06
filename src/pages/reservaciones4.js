import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../css/componentereserva1.module.css";
import logo from "../img/logo.png";

export function Reservaciones4() {
  const navigate = useNavigate();
  const location = useLocation();

  const sedeSeleccionada = location.state?.sedeSeleccionada || "";
  const cantidadPersonas = location.state?.cantidadPersonas || "";
  const fechaSeleccionada = location.state?.fechaSeleccionada || "";

  const [horaSeleccionada, setHoraSeleccionada] = useState("");

  const horarios = [
    "12:45 PM", "1:00 PM", "1:15 PM",
    "1:30 PM", "7:00 PM", "7:15 PM",
    "7:30 PM", "7:45 PM", "8:00 PM",
    "8:15 PM", "8:30 PM"
  ];

  const handleSelectHora = (hora) => {
    setHoraSeleccionada(hora);


    navigate("/reservaciones5", {
      state: {
        sedeSeleccionada,
        cantidadPersonas,
        fechaSeleccionada,
        horaSeleccionada: hora,
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
        <span onClick={() => navigate("/reservaciones2")} className={styles.mouse}>Personas</span>
        <span onClick={() => navigate("/reservaciones3")} className={styles.mouse}>Fecha</span>
        <span className={styles.activo}>Hora</span>
        <span>Datos</span>
      </div>


      <div className={styles.main}>
        <h2 className={styles.titulo}>Selecciona una hora</h2>
        <div className={styles.gridHoras}>
          {horarios.map((hora, index) => (
            <div
              key={index}
              className={`${styles.horaBox} ${horaSeleccionada === hora ? styles.selected : ""}`}
              onClick={() => handleSelectHora(hora)}

            >
              {hora}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
