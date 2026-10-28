1. Crear un proyecto usando vite:
    npm create vite@latest
    a. Nombrarlo: ________
    b. siguiente...etc

2. para instalar las dependencias se ingresa a la carpeta del proyecto y se escribe:
    a. npm install ó npm i
    b. npm run dev (si el proyecto no se despliega repita el paso a.)

3.  ingresamos al archivo index.html para personalizar el <title> de la etiqueta <head> y el idioma: <html lang="es">

4. ingresmos a el folder "src" y dentro vamos al archivo main.jsx 
    en main.jsx eliminamos la línea donde se importa el index.css

5. vamos al archivo App.css y borramos todos los estilos, allí colocamos nuestros estiles empezando por la normalización

6. en src creamos el Folder "Components" y dentro una folder por cada componente (nombrado con la primera letra en mayúscula), con un archivo jsx  un css con el mismo nombre ejemplo:

src
  |
  |-Components
    |    
    |- Footer
        |
        |-Footer.jsx
        |-Footer.css
    |- Header
        |
        |-Header.jsx
        |-Header.css

7. para crear un componente se puede emplear la extensión ES7+ React/Redux/React-Native snippets 
    digitando rafce en el archivo xxxxxx.jsx crea la estructura del Componente
    ejemplo:

        import React from 'react'
        const Header = () => {
           return (
            <div>Header</div>
           )
        }
        export default Header

8. para importar los estilos se usa ej: import "./Header.css" 
9. para usar imágenes se usa ej: import nombre_xxxx from "../../../public/  nombre_imagen.png"
    a. en la etiqueta img se coloca en el src:{nombre_xxxx}