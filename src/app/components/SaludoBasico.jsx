/**
 * Propósito: Demuestra el acceso básico a props (props.nombre) y renderizado condicional.
 *
 * Props esperadas:
 * - nombre (string, requerido): Nombre de la persona a saludar.
 * - entusiasta (boolean, opcional): Si es 'true', añade un mensaje de entusiasmo.
 */

export default function SaludoBasico(props) {
    
  return (
    <>
     <h1>Hola, bienvenidos {props.nombre}</h1>

      {props.entusiasta ===  true ? (
        <p>¡Qué bueno verte tan entusiasta! 🎉</p>
      ) : (
        <p>Bienvenido.</p>
      )}
   </>
  )
}
