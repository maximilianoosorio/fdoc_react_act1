/**
 * Propósito: Muestra un saludo que ilustra la desestructuración de props
 * directamente en la firma de la función.
 *
 * Props esperadas:
 * - nombre (string): El nombre de la persona a saludar.
 * - edad (number): La edad de la persona.
 */

export default function SaludoDesestructurado({nombre,edad}) {
  return (
    <div>
     <h1>hola, como estas {nombre} tu edad es {edad}</h1>
    </div>
  )
}
