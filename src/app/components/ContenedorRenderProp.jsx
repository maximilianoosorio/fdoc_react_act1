/**
 * Propósito: Un componente contenedor simple que ilustra el patrón
 * de "Render Prop". Recibe contenido como una prop llamada 'contenido' y
 * simplemente lo renderiza dentro de un marco con estilo.
 *
 * Props esperadas:
 * - contenido (ReactNode): Cualquier elemento, componente o JSX que
 * el componente padre quiera inyectar en este contenedor.
 */
export default function ContenedorRenderProp({ contenido }) {
  return (
    <div style={{ padding: "12px", border: "2px solid #ff4d8c", borderRadius: "8px" }}>
      {contenido}
    </div>
  );
}
