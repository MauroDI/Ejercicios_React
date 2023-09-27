export const dataset = {
    1: `Crear un proyecto compuesto de un solo Functional Component. En dicho componente mostrar al menos dos datos, como por ejemplo título y subtítulo. El componente debe ser llamado desde App, a continuación, se propondrá la jerarquía del árbol de componentes y de cómo es el llamado desde index.js. ${<img src="/img/Ejercicio1.jpg"/>}`,
    2: "Crear un proyecto compuesto por tres componentes bajo la misma jerarquía. Crear un Navbar, Main y Footer. Necesitamos hacer que Footer, Main y Navbar muestren al menos un dato, de la misma manera que el ejercicio anterior.",
    3: "Crear un Componente Main el cual llame dos veces a un mismo componente, es decir, que Main anide a Hijo e Hijo. Al primer Componente anidado pasarle como props el nombre Chiquito y al segundo el nombre Filomena. Desde los componentes Hijos atrapar los valores mediante las props.",
    4: "Crear un proyecto compuesto por 4 componentes bajo la siguiente jerarquía. Al hacer clic sobre las dos posibles opciones en el NavBar, se deberá cambiar entre Main1 y Main2 dependiendo de la navegación. Para lograrlo se deberá instalar y usar React Router Dom.",
    5: "Crear un proyecto compuesto de un solo componente y hacer uso de useState y mostrar el state del componente. Se podrá crear un contador de clics o crear un input que mediante onChange cambie el valor del state. Cualquiera de las dos opciones es válida para este ejercicio.",
    6: "Crear un proyecto compuesto de un solo componente y un servicio, que deberá ser capaz de llamar desde el servicio, mediante la funcionalidad Fetch, a la API de Rick and Morty (https://rickandmortyapi.com/api/character). Una vez llamados los datos desde el servicio, hacer uso de useEffect en el componente creado, deberá mostrar una lista compuesta de los nombres de los 20 primeros personajes.",
  };
  
  export const getEjercicio = (numero) => {
    return dataset[numero] || null;
  };