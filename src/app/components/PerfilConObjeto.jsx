/**
 * Propósito: Muestra información de perfil. Demuestra cómo pasar un objeto
 * complejo (en este caso, un objeto 'usuario') como una sola prop y
 * desestructurar sus propiedades internas.
 *
 * Props esperadas:
 * - usuario (object): Un objeto que debe contener las siguientes propiedades:
 * - nombre (string): Nombre del usuario.
 * - hobbies (array<string>): Una lista de pasatiempos.
 */
export default function PerfilConObjeto({ usuario }) {
  const { nombre, hobbies } = usuario;

  return (
    <div>
      <h2>Usuario: {nombre}</h2>
      {hobbies.length === 0 ? (
        <p>Sin hobbies</p>
      ) : (
        <p>Hobbies: {hobbies.join(", ")}</p>
      )}
    </div>
  );
}
