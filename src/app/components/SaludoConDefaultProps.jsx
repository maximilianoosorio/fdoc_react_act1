/**
 * Propósito: Muestra un saludo que utiliza un valor por defecto (default prop)
 * para la prop 'nombre'. Si no se pasa 'nombre', utilizará el valor "Invitado".
 *
 * Props esperadas:
 * - nombre (string, opcional): El nombre de la persona a saludar.
 * (Por defecto: "Invitado")
 */
export default function SaludoConDefaultProps({ nombre = "Invitado" }) {
  return (
    <div
      style={{
        padding: "10px",
        border: "2px solid purple",
        borderRadius: "8px",
        marginTop: "10px",
      }}
    >
      <h2>Hola, {nombre} </h2>
    </div>
  );
}
