export interface Certification {
  id: string;
  title: string;
  institution: string;
  category: 'frontend' | 'backend' | 'tools' | 'fundamentals' | 'languages' | 'other';
  status?: 'completed';
  date: string;
  description: string;
  url: string;
}

export const certifications: Certification[] = [
    {
      "id": "curso-fundamentos-javascript",
      "title": "Curso de Fundamentos de JavaScript",
      "institution": "Platzi",
      "category": "fundamentals",
      "description": "",
      "date": "30/09/2024",
      "url": "https://platzi.com/p/diegonacimiento18/curso/10266-course/diploma/detalle/"
    },
    {
      "id": "curso-nextjs",
      "title": "Curso de Next.js",
      "institution": "Platzi",
      "category": "frontend",
      "description": "",
      "date": "08/12/2023",
      "url": "https://platzi.com/p/diegonacimiento18/curso/1991-course/diploma/detalle/"
    },
    {
      "id": "curso-nestjs-autenticacion",
      "title": "Curso de NestJS: Autenticación con Passport y JWT",
      "institution": "Platzi",
      "category": "backend",
      "description": "",
      "date": "16/11/2023",
      "url": "https://platzi.com/p/diegonacimiento18/curso/2283-course/diploma/detalle/"
    },
    {
      "id": "curso-nestjs-typeorm",
      "title": "Curso de NestJS: Persistencia de Datos con TypeORM",
      "institution": "Platzi",
      "category": "backend",
      "description": "",
      "date": "11/11/2023",
      "url": "https://platzi.com/p/diegonacimiento18/curso/2282-course/diploma/detalle/"
    },
    {
      "id": "curso-nestjs-mongodb",
      "title": "Curso de NestJS: Persistencia de Datos con MongoDB",
      "institution": "Platzi",
      "category": "backend",
      "description": "",
      "date": "31/10/2023",
      "url": "https://platzi.com/p/diegonacimiento18/curso/2276-course/diploma/detalle/"
    },
    {
      "id": "curso-nestjs-modular-swagger-deploy",
      "title": "Curso de NestJS: Programación Modular, Documentación con Swagger y Deploy",
      "institution": "Platzi",
      "category": "backend",
      "description": "",
      "date": "25/10/2023",
      "url": "https://platzi.com/p/diegonacimiento18/curso/2274-course/diploma/detalle/"
    },
    {
      "id": "curso-backend-nestjs",
      "title": "Curso de Backend con NestJS",
      "institution": "Platzi",
      "category": "backend",
      "description": "",
      "date": "19/10/2023",
      "url": "https://platzi.com/p/diegonacimiento18/curso/2272-course/diploma/detalle/"
    },
    {
      "id": "curso-tailwind-basico",
      "title": "Curso Básico de Tailwind 2 y 3",
      "institution": "Platzi",
      "category": "frontend",
      "description": "",
      "date": "12/10/2023",
      "url": "https://platzi.com/p/diegonacimiento18/curso/2702-course/diploma/detalle/"
    },
    {
      "id": "curso-creacion-cv",
      "title": "Curso de Creación de CV",
      "institution": "Platzi",
      "category": "other",
      "description": "",
      "date": "05/10/2023",
      "url": "https://platzi.com/p/diegonacimiento18/curso/6603-course/diploma/detalle/"
    },
    {
      "id": "curso-creacion-portafolio",
      "title": "Curso de Creación de Portafolio para Desarrolladores Web",
      "institution": "Platzi",
      "category": "other",
      "description": "",
      "date": "05/09/2023",
      "url": "https://platzi.com/p/diegonacimiento18/curso/6571-course/diploma/detalle/"
    },
    {
      "id": "curso-npm",
      "title": "Curso de NPM: Gestión de Paquetes y Dependencias en JavaScript",
      "institution": "Platzi",
      "category": "tools",
      "description": "",
      "date": "30/06/2023",
      "url": "https://platzi.com/p/diegonacimiento18/curso/3578-course/diploma/detalle/"
    },
    {
      "id": "curso-react-native-formularios",
      "title": "Curso de React Native: Formularios, Almacenamiento y Deploy",
      "institution": "Platzi",
      "category": "frontend",
      "description": "",
      "date": "17/06/2023",
      "url": "https://platzi.com/p/diegonacimiento18/curso/2558-course/diploma/detalle/"
    },
    {
      "id": "curso-react-native-listas-apis",
      "title": "Curso de React Native: Manejo de Listas y Consumo de APIs",
      "institution": "Platzi",
      "category": "frontend",
      "description": "",
      "date": "12/06/2023",
      "url": "https://platzi.com/p/diegonacimiento18/curso/2557-course/diploma/detalle/"
    },
    {
      "id": "curso-introduccion-react-native",
      "title": "Curso de Introducción a React Native",
      "institution": "Platzi",
      "category": "frontend",
      "description": "",
      "date": "15/05/2023",
      "url": "https://platzi.com/p/diegonacimiento18/curso/2556-course/diploma/detalle/"
    },
    {
      "id": "curso-typescript-poo-asincronismo",
      "title": "Curso de TypeScript: Programación Orientada a Objetos y Asincronismo",
      "institution": "Platzi",
      "category": "languages",
      "description": "",
      "date": "08/05/2023",
      "url": "https://platzi.com/p/diegonacimiento18/curso/2880-course/diploma/detalle/"
    },
    {
      "id": "curso-react-hooks-profesional",
      "title": "Curso Profesional de React Hooks",
      "institution": "Platzi",
      "category": "frontend",
      "description": "",
      "date": "18/03/2023",
      "url": "https://platzi.com/p/diegonacimiento18/curso/2118-course/diploma/detalle/"
    },
    {
      "id": "curso-ingles-basico-a1",
      "title": "Curso de Inglés Básico A1: Conversaciones Cortas y Habituales (2020)",
      "institution": "Platzi",
      "category": "languages",
      "description": "",
      "date": "19/02/2023",
      "url": "https://platzi.com/p/diegonacimiento18/curso/1945-course/diploma/detalle/"
    },
    {
      "id": "curso-reactjs-estado",
      "title": "Curso de React.js: Manejo Profesional del Estado",
      "institution": "Platzi",
      "category": "frontend",
      "description": "",
      "date": "14/02/2023",
      "url": "https://platzi.com/p/diegonacimiento18/curso/2597-course/diploma/detalle/"
    },
    {
      "id": "curso-reactjs-patrones",
      "title": "Curso de React.js: Patrones de Render y Composición",
      "institution": "Platzi",
      "category": "frontend",
      "description": "",
      "date": "09/02/2023",
      "url": "https://platzi.com/p/diegonacimiento18/curso/2457-course/diploma/detalle/"
    },
    {
      "id": "curso-reactjs-router",
      "title": "Curso de React.js: Navegación con React Router",
      "institution": "Platzi",
      "category": "frontend",
      "description": "",
      "date": "03/02/2023",
      "url": "https://platzi.com/p/diegonacimiento18/curso/3468-course/diploma/detalle/"
    },
    {
      "id": "curso-estrategias-ingles",
      "title": "Curso Gratis de Estrategias para Aprender Inglés en Línea",
      "institution": "Platzi",
      "category": "languages",
      "description": "",
      "date": "24/01/2023",
      "url": "https://platzi.com/p/diegonacimiento18/curso/2633-course/diploma/detalle/"
    },
    {
      "id": "curso-typescript-avanzado",
      "title": "Curso de TypeScript: Tipos Avanzados y Funciones",
      "institution": "Platzi",
      "category": "languages",
      "description": "",
      "date": "24/01/2023",
      "url": "https://platzi.com/p/diegonacimiento18/curso/2879-course/diploma/detalle/"
    },
    {
      "id": "curso-typescript",
      "title": "Curso de TypeScript",
      "institution": "Platzi",
      "category": "languages",
      "description": "",
      "date": "17/01/2023",
      "url": "https://platzi.com/p/diegonacimiento18/curso/2878-course/diploma/detalle/"
    },
    {
      "id": "curso-introduccion-web",
      "title": "Curso de Introducción a la Web: Historia y Funcionamiento de Internet",
      "institution": "Platzi",
      "category": "fundamentals",
      "description": "",
      "date": "17/12/2022",
      "url": "https://platzi.com/p/diegonacimiento18/curso/2053-course/diploma/detalle/"
    },
    {
      "id": "curso-programacion-basica",
      "title": "Curso Gratis de Programación Básica",
      "institution": "Platzi",
      "category": "fundamentals",
      "description": "",
      "date": "13/12/2022",
      "url": "https://platzi.com/p/diegonacimiento18/curso/1023-course/diploma/detalle/"
    },
    {
      "id": "curso-fundamentos-typescript",
      "title": "Curso de Fundamentos de TypeScript",
      "institution": "Platzi",
      "category": "fundamentals",
      "description": "",
      "date": "12/12/2022",
      "url": "https://platzi.com/p/diegonacimiento18/curso/2877-course/diploma/detalle/"
    },
    {
      "id": "curso-html-css",
      "title": "Curso Definitivo de HTML y CSS",
      "institution": "Platzi",
      "category": "frontend",
      "description": "",
      "date": "07/12/2022",
      "url": "https://platzi.com/p/diegonacimiento18/curso/2008-course/diploma/detalle/"
    },
    {
      "id": "curso-ingles-principiantes",
      "title": "Curso de Inglés para Principiantes: Saludos y Presentaciones (2018)",
      "institution": "Platzi",
      "category": "languages",
      "description": "",
      "date": "27/11/2022",
      "url": "https://platzi.com/p/diegonacimiento18/curso/1939-course/diploma/detalle/"
    },
    {
      "id": "curso-javascript-basico",
      "title": "Curso Básico de JavaScript",
      "institution": "Platzi",
      "category": "fundamentals",
      "description": "",
      "date": "05/07/2022",
      "url": "https://platzi.com/p/diegonacimiento18/curso/1814-course/diploma/detalle/"
    },
    {
      "id": "curso-ingles-basico-gramatica",
      "title": "Curso de Inglés Básico: Gramática y Vocabulario (2018)",
      "institution": "Platzi",
      "category": "languages",
      "description": "",
      "date": "27/11/2022",
      "url": "https://platzi.com/p/diegonacimiento18/curso/1943-course/diploma/detalle/"
    },
    {
      "id": "curso-pensamiento-logico-lenguajes",
      "title": "Curso de Pensamiento Lógico: Lenguajes de Programación",
      "institution": "Platzi",
      "category": "fundamentals",
      "description": "",
      "date": "14/12/2022",
      "url": "https://platzi.com/p/diegonacimiento18/curso/3223-course/diploma/detalle/"
    },
    {
      "id": "curso-pensamiento-logico-datos",
      "title": "Curso de Pensamiento Lógico: Manejo de Datos, Estructuras y Funciones",
      "institution": "Platzi",
      "category": "fundamentals",
      "description": "",
      "date": "13/12/2022",
      "url": "https://platzi.com/p/diegonacimiento18/curso/3222-course/diploma/detalle/"
    },
    {
      "id": "curso-pensamiento-logico-algoritmos",
      "title": "Curso de Pensamiento Lógico: Algoritmos y Diagramas de Flujo",
      "institution": "Platzi",
      "category": "fundamentals",
      "description": "",
      "date": "13/12/2022",
      "url": "https://platzi.com/p/diegonacimiento18/curso/3221-course/diploma/detalle/"
    },
    {
      "id": "curso-computadores-informatica",
      "title": "Curso Básico de Computadores e Informática",
      "institution": "Platzi",
      "category": "fundamentals",
      "description": "",
      "date": "13/12/2022",
      "url": "https://platzi.com/p/diegonacimiento18/curso/2793-course/diploma/detalle/"
    },
    {
      "id": "curso-responsive-design",
      "title": "Curso de Responsive Design: Maquetación Mobile First",
      "institution": "Platzi",
      "category": "frontend",
      "description": "",
      "date": "14/11/2022",
      "url": "https://platzi.com/p/diegonacimiento18/curso/2030-course/diploma/detalle/"
    },
    {
      "id": "curso-react-17",
      "title": "Curso de React 17",
      "institution": "Platzi",
      "category": "frontend",
      "description": "",
      "date": "27/10/2022",
      "url": "https://platzi.com/p/diegonacimiento18/curso/2444-course/diploma/detalle/"
    },
    {
      "id": "curso-nodejs-autenticacion",
      "title": "Curso de Backend con Node.js: Autenticación con Passport.js y JWT",
      "institution": "Platzi",
      "category": "backend",
      "description": "",
      "date": "29/09/2022",
      "url": "https://platzi.com/p/diegonacimiento18/curso/2489-course/diploma/detalle/"
    },
    {
      "id": "curso-nodejs-postgresql",
      "title": "Curso de Backend con Node.js: Base de Datos con PostgreSQL",
      "institution": "Platzi",
      "category": "backend",
      "description": "",
      "date": "18/09/2022",
      "url": "https://platzi.com/p/diegonacimiento18/curso/2507-course/diploma/detalle/"
    },
    {
      "id": "curso-nodejs-express",
      "title": "Curso de Backend con Node.js: API REST con Express.js",
      "institution": "Platzi",
      "category": "backend",
      "description": "",
      "date": "24/08/2022",
      "url": "https://platzi.com/p/diegonacimiento18/curso/2485-course/diploma/detalle/"
    },
    {
      "id": "curso-git-github",
      "title": "Curso Profesional de Git y GitHub",
      "institution": "Platzi",
      "category": "tools",
      "description": "",
      "date": "12/08/2022",
      "url": "https://platzi.com/p/diegonacimiento18/curso/1557-course/diploma/detalle/"
    },
    {
      "id": "curso-fundamentos-nodejs",
      "title": "Curso de Fundamentos de Node.js",
      "institution": "Platzi",
      "category": "backend",
      "description": "",
      "date": "23/07/2022",
      "url": "https://platzi.com/p/diegonacimiento18/curso/1759-course/diploma/detalle/"
    },
    {
      "id": "curso-ecmascript-6",
      "title": "Curso de ECMAScript 6+",
      "institution": "Platzi",
      "category": "languages",
      "description": "",
      "date": "09/07/2022",
      "url": "https://platzi.com/p/diegonacimiento18/curso/1815-course/diploma/detalle/"
    },
    {
      "id": "curso-javascript-engine",
      "title": "Curso de JavaScript Engine (V8) y el Navegador",
      "institution": "Platzi",
      "category": "fundamentals",
      "description": "",
      "date": "06/07/2022",
      "url": "https://platzi.com/p/diegonacimiento18/curso/1798-course/diploma/detalle/"
    }
  ]
 