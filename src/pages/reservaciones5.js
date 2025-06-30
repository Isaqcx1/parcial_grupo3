import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../components/componentereserva1.module.css";
import logo from "../img/logo.png";

export function Reservaciones5() {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    sedeSeleccionada,
    cantidadPersonas,
    fechaSeleccionada,
    horaSeleccionada,
  } = location.state || {};

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [dni, setDni] = useState("");

  const handleFinalizar = () => {
    if (!nombre || !correo || !telefono || !dni) {
      alert("Por favor completa todos los campos.");
      return;
    }

    if (telefono.length !== 9) {
      alert("El teléfono debe tener 9 dígitos.");
      return;
    }

    if (dni.length !== 8) {
      alert("El DNI debe tener 8 dígitos.");
      return;
    }

    if (!correo.includes("@")) {
        alert("El correo debe contener al menos un '@'.");
        return;
      }

    navigate("/boleta", {
      state: {
        nombre,
        correo,
        telefono: `+51 ${telefono}`,
        dni,
        sedeSeleccionada,
        cantidadPersonas,
        fechaSeleccionada,
        horaSeleccionada,
      },
    });
  };

  return (
    <div className={styles.fondo}>
      <div className={styles.logoTop}>
        <img src={logo}  />
      </div>

      <div className={styles.pasos}>
        <span>Sedes</span>
        <span>Personas</span>
        <span>Fecha</span>
        <span>Hora</span>
        <span className={styles.activo}>Datos</span>
      </div>

      <div className={styles.main}>
        <h2 className={styles.titulo}>Completa tus datos</h2>

        <div className={styles.formGrupo}>
          <label>Nombre completo</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className={styles.input}
          />

          <label>Correo electrónico</label>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className={styles.input}
          />

          <label>Teléfono</label>
          <div className={styles.telefonoGrupo}>
            <span className={styles.codigoPais}>+51</span>
            <input
              type="number"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              className={styles.telefonoInput}
              min="0"
              max="999999999"
            />
          </div>

          <label>DNI</label>
          <input
            type="number"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
            className={styles.input}
            min="0"
            max="99999999"
          />
        </div>

        <div className={styles.resumen}>
          <h3>Resumen de la reserva</h3>
          <input value={`Sede: ${sedeSeleccionada}`} readOnly />
          <input value={`Personas: ${cantidadPersonas}`} readOnly />
          <input value={`Fecha: ${fechaSeleccionada}`} readOnly />
          <input value={`Hora: ${horaSeleccionada}`} readOnly />
        </div>

        <div className={styles.finalizarContainer}>
          <button className={styles.botonFinalizar} onClick={handleFinalizar}>
            Finalizar
          </button>
        </div>
      </div>
    </div>
  );
}
