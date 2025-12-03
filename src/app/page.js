/**
 * Propósito: Página de demostración que instancia cada uno de los componentes
 * para ilustrar los diferentes patrones de props en React/Next.js.
 */
"use client";

// Importaciones de los componentes de demostración.
// NOTA: Se asume que los componentes están dentro de la carpeta './Components'.
import BotonConAccion from './Components/BotonConCallback';
import CajaChildren from './Components/CajaChildren';
import ContenedorRenderProp from './Components/ContenedorRenderProp';
import PerfilConObjeto from './Components/PerfilConObjeto';
import SaludoBasico from './Components/SaludoBasico';
import SaludoConDefaultProps from './Components/SaludoConDefaultProps';
import SaludoDesestructurado from './Components/SaludoDesestructurado';

export default function Page() {
  // Datos de ejemplo para el componente PerfilConObjeto
  const usuario1 = { nombre: "Fredy", hobbies: ["Leer", "Cantar", "Bailar"]} ;
  
  // Función callback para el componente BotonConAccion
  function mensaje() {
    alert("¡Hiciste clic en el botón!");
  }
    
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Demostración de Patrones de Props en React</h1>
      <hr style={{ margin: '20px 0' }} />

      {/* ---------------------------------------------------- */}
      {/* 1. SaludoBasico: Paso de Props tradicional (props.nombre) y condicional. */}
      {/* Uso previsto: El componente renderiza un saludo y un mensaje condicional basado en la prop 'entusiasta'. */}
      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#4CAF50' }}>1. SaludoBasico (Acceso vía props.)</h2>
        <SaludoBasico nombre="Fredy" entusiasta={true} />
      </section>
      
      {/* ---------------------------------------------------- */}
      {/* 2. SaludoDesestructurado: Paso de Props con desestructuración. */}
      {/* Uso previsto: Las props 'nombre' y 'edad' se extraen directamente en la firma del componente hijo para mayor claridad. */}
      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#2196F3' }}>2. SaludoDesestructurado (Desestructuración)</h2>
        <SaludoDesestructurado nombre="Fredy" edad={30} />
      </section>
      
      {/* ---------------------------------------------------- */}
      {/* 3. PerfilConObjeto: Paso de un objeto como Prop única. */}
      {/* Uso previsto: Se pasa todo el objeto 'usuario1' como prop; el componente hijo extrae { nombre, hobbies }. */}
      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#FFC107' }}>3. PerfilConObjeto (Prop de Objeto)</h2>
        <PerfilConObjeto usuario={usuario1} />
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. BotonConAccion: Paso de una función (callback) como Prop. */}
      {/* Uso previsto: La prop 'onClick' recibe la función 'mensaje', permitiendo al botón ejecutar lógica definida en el componente Page. */}
      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#FF4D8C' }}>4. BotonConCallback (Función Callback)</h2>
        <BotonConAccion texto="Presionar" onClick={mensaje} />
      </section>

      {/* ---------------------------------------------------- */}
      {/* 5. ContenedorRenderProp: Paso de JSX como Prop. */}
      {/* Uso previsto: El <h3> se pasa como la prop 'contenido'. El contenedor lo renderiza dentro de su propio wrapper. */}
      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#9C27B0' }}>5. ContenedorRenderProp (Render Prop)</h2>
        <ContenedorRenderProp  contenido={<h3>Hola, soy contenido de locura </h3>}/>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 6. CajaChildren: Uso de la Prop 'children'. */}
      {/* Uso previsto: Se envuelve contenido anidado. El componente CajaChildren lo renderiza dentro de su caja vía {children}. */}
      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#00BCD4' }}>6. CajaChildren (Prop Children)</h2>
        
        {/* Caso 1: Título + Párrafo */}
      <CajaChildren>
        <h2>Bienvenidos</h2>
        <p>Esta es una caja usando children con título y párrafo.</p>
      </CajaChildren>

      {/* Caso 2: Lista */}
      <CajaChildren>
         <ul>
          <li><a href="https://google.com" target="_blank">Google</a></li>
          <li><a href="https://youtube.com" target="_blank">YouTube</a></li>
          <li><a href="https://github.com" target="_blank">GitHub</a></li>
        </ul>
      </CajaChildren>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 7. SaludoConDefaultProps: Props con valores por defecto. */}
      {/* Uso previsto: Demostrar que el componente funciona con la prop ('Fredy') y sin la prop (usa "Invitado"). */}
      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#607D8B' }}>7. SaludoConDefaultProps (Props por Defecto)</h2>
        
       {/* Caso 1: con nombre */}
      <SaludoConDefaultProps nombre="Fredy" />

      {/* Caso 2: sin nombre */}
      <SaludoConDefaultProps />
      </section>
      
      <hr style={{ margin: '30px 0 10px 0' }} />

      {/* ---------------------------------------------------- */}
      {/* LISTA DE PRUEBAS MANUALES (QUÉ OBSERVAR EN PANTALLA) */}
      <h2 style={{ color: '#444' }}>Pruebas Manuales [Verificación de la Implementación]</h2>
      <ol style={{ listStyleType: 'decimal', paddingLeft: '20px' }}>
        <li style={{ marginBottom: '10px' }}>**SaludoBasico (ej. 1):** Debe mostrar "hola bienvenidos Fredy" y el mensaje "¡Qué bueno verte tan entusiasta! 🎉".</li>
        <li style={{ marginBottom: '10px' }}>**SaludoDesestructurado (ej. 2):** Debe mostrar "hola, como estas Fredy tu edad es 30".</li>
        <li style={{ marginBottom: '10px' }}>**PerfilConObjeto (ej. 3):** Debe mostrar "Usuario: Fredy" y la lista de hobbies separados por coma: "Leer, Cantar, Bailar".</li>
        <li style={{ marginBottom: '10px' }}>**BotonConAccion (ej. 4):** Al hacer clic en el botón "Presionar", debe aparecer una ventana emergente (`alert`) con el mensaje "¡Hiciste clic en el botón!".</li>
        <li style={{ marginBottom: '10px' }}>**ContenedorRenderProp (ej. 5):** Debe haber un cuadro con borde rosado que contenga el título "Hola, soy contenido de locura".</li>
        <li style={{ marginBottom: '10px' }}>**CajaChildren (ej. 6):** Deben verse dos cuadros separados: uno con un título y un párrafo, y otro con una lista de tres enlaces (Google, YouTube, GitHub).</li>
        <li style={{ marginBottom: '10px' }}>**SaludoConDefaultProps (ej. 7, Caso 1):** Debe haber un cuadro con borde púrpura que diga "Hola, Fredy".</li>
        <li style={{ marginBottom: '10px' }}>**SaludoConDefaultProps (ej. 7, Caso 2):** Debe haber otro cuadro con borde púrpura que diga "Hola, Invitado" (probando el valor por defecto).</li>
      </ol>
      {/* ---------------------------------------------------- */}

    </div>
  );
}
