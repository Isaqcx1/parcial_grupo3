import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../components/boleta.module.css";
import logo from "../img/logo.png";
import imgn from "../img/imagn.png";

export function Boleta() {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    nombre,
    correo,
    telefono,
    dni,
    sedeSeleccionada,
    cantidadPersonas,
    fechaSeleccionada,
    horaSeleccionada,
  } = location.state || {};

  const handleIrInicio = () => {
    navigate("/home");
  };

  return (
    <div className={styles.fondo}>
      <div className={styles.logoTop}>
        <img src={logo}/>
      </div>

      <div className={styles.main}>
        <h1 className={styles.titulo}>Boleta de Reserva</h1>

        <div className={styles.resumen}>
          <input value={`Nombre: ${nombre}`} readOnly />
          <input value={`Correo: ${correo}`} readOnly />
          <input value={`Teléfono: ${telefono}`} readOnly />
          <input value={`DNI: ${dni}`} readOnly />
          <input value={`Sede: ${sedeSeleccionada}`} readOnly />
          <input value={`Personas: ${cantidadPersonas}`} readOnly />
          <input value={`Fecha: ${fechaSeleccionada}`} readOnly />
          <input value={`Hora: ${horaSeleccionada}`} readOnly />
        </div>

        <div className={styles.totalContainer}>
          <img
            src={imgn}
            className={styles.xddd}
          />

          <h2 className={styles.totalTexto}>
            Total: 100000/s
          </h2>

          <button
            className={styles.botonFinalizar}
            onClick={handleIrInicio}
          >
            Ir al Inicio
          </button>
        </div>
      </div>
    </div>
  );
}