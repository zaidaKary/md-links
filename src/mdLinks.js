import { convertPathAbs } from './path.js';
import { arrayLinksFile } from './file.js';
import { validateLink } from './validate.js';

// const path = require('path');

export const mdLinks = (route, options) => new Promise((resolve) => {
  // convirtiendo a ruta absoluta
  const routeAbs = convertPathAbs(route);
  if (options && options.validate === true) {
    // validando link (href, text, file, status, statusText)
    resolve(validateLink(routeAbs));
  } else {
    // Obteniendo los links en una array de objetos (href, text, file)
    resolve(arrayLinksFile(routeAbs));
  }
});
// mdLinks(path.join(process.cwd(), './test/prueba/pruebita'), { validate: true }).then((res) => {
//   console.log(res);
// });
// mdLinks(path.join(process.cwd(), './test/prueba/pruebita'), { validate: false }).then((res) => {
//   console.log(res);
// });
