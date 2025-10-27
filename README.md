/**

Propósito: Este documento documenta el objetivo del proyecto,

cómo ejecutarlo, y lista los componentes implementados con fines académicos.
*/

Demostración de Patrones de Props en React/Next.js

Este es un proyecto Next.js inicializado con create-next-app.

🎯 Objetivo de la Actividad

El objetivo principal de esta actividad es demostrar la comprensión y aplicación de los siete patrones fundamentales para el paso de propiedades (props) entre componentes de React.

🚀 Getting Started & Cómo Correr el Proyecto

Para poner en marcha la aplicación en tu entorno local:

Asegúrate de tener instaladas las dependencias:

npm install


Inicia el servidor de desarrollo, como indica el requisito:

npm run dev


Abre http://localhost:3000 en tu navegador para ver la página de demostración.

📦 Lista de Componentes Documentados

Todos los siguientes archivos son componentes funcionales utilizados y documentados en la página de demostración (app/page.js).

Componente

Patrón de Props Demostrado

SaludoBasico.jsx

Acceso tradicional (props.nombre) y paso condicional.

SaludoDesestructurado.jsx

Desestructuración directa de props.

PerfilConObjeto.jsx

Paso de un objeto complejo como prop única.

BotonConCallback.jsx

Paso de una función (callback) como prop.

ContenedorRenderProp.jsx

Patrón de "Render Prop" (paso de JSX).

CajaChildren.jsx

Uso de la prop children.

SaludoConDefaultProps.jsx

Definición de valores por defecto en props.

NOTA: Todos estos componentes contienen solo documentación, sin ninguna lógica compleja adicional más allá de lo necesario para la demostración.