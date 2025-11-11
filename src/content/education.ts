export interface Education {
  id: string;
  title: string;
  institution: string;
  type: 'university' | 'certification';
  status: 'in-progress' | 'completed';
  startDate: string;
  endDate?: string;
  description: string;
  url?: string;
}

export const education: Education[] = [
  {
    id: 'unam-cp',
    title: 'Contador Público',
    institution: 'Universidad Nacional de Misiones',
    type: 'university',
    status: 'in-progress',
    startDate: '2019',
    endDate: '2022',
    description: 'Materias aprobadas de 1er y 2do año de la carrera de Contador Público. Actualmente en pausa para enfocarme en el desarrollo de software.',
  },
  // {
  //   id: 'platzi-nextjs',
  //   title: 'Next.js',
  //   institution: 'Platzi',
  //   type: 'certification',
  //   status: 'completed',
  //   startDate: '2023',
  //   endDate: '2023',
  //   description: 'Desarrollo de aplicaciones web modernas con Next.js, incluyendo SSR, SSG y optimización de rendimiento.',
  //   url: 'https://platzi.com/p/diegonacimiento18/curso/1991-course/diploma/detalle/'
  // },
  // {
  //   id: 'platzi-nestjs',
  //   title: 'Backend con NestJS',
  //   institution: 'Platzi',
  //   type: 'certification',
  //   status: 'completed',
  //   startDate: '2023',
  //   endDate: '2023',
  //   description: 'Desarrollo de APIs RESTful con NestJS, incluyendo autenticación, persistencia de datos y documentación con Swagger.',
  //   url: 'https://platzi.com/p/diegonacimiento18/curso/2272-course/diploma/detalle/'
  // },
  // {
  //   id: 'platzi-typescript',
  //   title: 'TypeScript: Tipos Avanzados y Funciones',
  //   institution: 'Platzi',
  //   type: 'certification',
  //   status: 'completed',
  //   startDate: '2023',
  //   endDate: '2023',
  //   description: 'Programación avanzada con TypeScript, tipos genéricos, decoradores y patrones de diseño.',
  //   url: 'https://platzi.com/p/diegonacimiento18/curso/2879-course/diploma/detalle/'
  // },
  // {
  //   id: 'platzi-react',
  //   title: 'React.js: Patrones de Render y Composición',
  //   institution: 'Platzi',
  //   type: 'certification',
  //   status: 'completed',
  //   startDate: '2023',
  //   endDate: '2023',
  //   description: 'Patrones avanzados de React, optimización de rendimiento y composición de componentes.',
  //   url: 'https://platzi.com/p/diegonacimiento18/curso/2457-course/diploma/detalle/'
  // },
  // {
  //   id: 'platzi-node',
  //   title: 'Backend con Node.js: API REST con Express.js',
  //   institution: 'Platzi',
  //   type: 'certification',
  //   status: 'completed',
  //   startDate: '2023',
  //   endDate: '2023',
  //   description: 'Desarrollo de APIs RESTful con Node.js y Express, incluyendo autenticación y bases de datos.',
  //   url: 'https://platzi.com/p/diegonacimiento18/curso/2485-course/diploma/detalle/'
  // }
]; 