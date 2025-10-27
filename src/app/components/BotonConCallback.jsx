/**
 * Propósito: Renderiza un botón que recibe una función de callback como prop.
 * Esto permite al componente padre controlar la lógica cuando se hace clic en el botón.
 *
 * Props esperadas:
 * - onClick (function): La función que se ejecutará cuando se haga clic en el botón.
 * - texto (string): El texto que se mostrará dentro del botón.
 */
"use client";

export default function BotonConAccion({ onClick, texto }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 18px",
        borderRadius: "8px",
        border: "none",
        backgroundColor: "#ff4d8c",
        color: "white",
        cursor: "pointer"
      }}
    >
      {texto}
    </button>
  );
}
