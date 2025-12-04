/**
 * Propósito: Demuestra el acceso básico a props (props.nombre) y renderizado condicional.
 *
 * Props esperadas:
 * - nombre (string, requerido): Nombre de la persona a saludar.
 * - entusiasta (boolean, opcional): Si es 'true', añade un mensaje de entusiasmo.
 */

export default function SaludoBasico({ nombre = "Invitado", entusiasta = false }) {
  return (
    <>
      <h1>Hola, {nombre}, bienvenido/a</h1>

      {entusiasta ? (
        <p>¡Qué bueno verte tan entusiasta! 🎉</p>
      ) : (
        <p>Bienvenido.</p>
      )}
    </>
  );
}
