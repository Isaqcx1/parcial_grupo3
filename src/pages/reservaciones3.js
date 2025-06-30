import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../components/componentereserva1.module.css";
import logo from "../img/logo.png";

export function Reservaciones3() {
  const navigate = useNavigate();
  const location = useLocation();

  const sedeSeleccionada = location.state?.sedeSeleccionada || "";
  const cantidadPersonas = location.state?.cantidadPersonas || "";

  const [fechaSeleccionada, setFechaSeleccionada] = useState("");

  const hoy = new Date();
  const maxDate = new Date();
  maxDate.setMonth(hoy.getMonth() + 3);

  const formatoInput = (date) => date.toISOString().split("T")[0];

  const formatearFecha = (valorInput) => {
    const fecha = new Date(valorInput);
    const dia = String(fecha.getDate()).padStart(2, "0");
    const mes = String(fecha.getMonth() + 1).padStart(2, "0");
    const anio = fecha.getFullYear();
    return `${dia}/${mes}/${anio}`;
  };

  const handleChange = (e) => {
    const fecha = e.target.value;
    if (!fecha) return;

    setFechaSeleccionada(fecha);
    const fechaFormateada = formatearFecha(fecha);

    
      navigate("/reservaciones4", {
        state: {
          sedeSeleccionada,
          cantidadPersonas,
          fechaSeleccionada: fechaFormateada,
        },
      });
    
  };

  return (
    <div className={styles.fondo}>
      
      <div className={styles.logoTop}>
        <img src={logo} />
      </div>


      <div className={styles.pasos}>
        <span>Sedes</span>
        <span>Personas</span>
        <span className={styles.activo}>Fecha</span>
        <span>Hora</span>
        <span>Datos</span>
      </div>

      <div className={styles.main}>
        <h2 className={styles.titulo}>Selecciona una fecha</h2>
        <input
          type="date"
          min={formatoInput(hoy)}
          max={formatoInput(maxDate)}
          value={fechaSeleccionada}
          onChange={handleChange}
          required
          className={styles.inputFecha}
        />
      </div>
    </div>
  );
}
