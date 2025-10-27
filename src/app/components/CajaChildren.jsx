/**
 * Propósito: Un componente contenedor que ilustra el uso de la prop 'children'.
 * Renderiza cualquier contenido que se pase entre sus etiquetas de apertura y cierre
 * dentro de un marco con estilo, permitiendo una composición flexible.
 *
 * Props esperadas:
 * - children (ReactNode): El contenido interno (JSX, elementos, componentes)
 * que se pasa al componente.
 */
export default function CajaChildren({ children }) {
  return (
    <div
      style={{
        padding: "14px",
        border: "2px solid #ff4d8c",
        borderRadius: "10px",
        marginTop: "12px",
      }}
    >
      {children}
    </div>
  );
}
