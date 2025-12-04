/**
 * Propósito: Renderiza un botón que recibe una función de callback como prop.
 * Esto permite al componente padre controlar la lógica cuando se hace clic en el botón.
 *
 * Props esperadas:
 * - onClick (function, opcional): La función que se ejecutará cuando se haga clic en el botón.
 * - texto (string, requerido): El texto que se mostrará dentro del botón.
 */
"use client";

export default function BotonConCallback({ onClick = () => {}, texto = "Botón" }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-lg bg-pink-500 text-white hover:bg-pink-600 transition-colors duration-200"
    >
      {texto}
    </button>
  );
}
