"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatOutput = exports.statValidate = exports.stats = void 0;

// const path = require('path');
// const array = [{
//   href: 'https://es-la.facebook.com/',
//   text: 'Facebook',
//   file: path.join(process.cwd(), '\\test\\prueba\\pruebita\\link.md'),
//   status: 200,
//   statusText: 'OK',
// },
// {
//   href: 'https://www.google.com/hx',
//   text: 'Google',
//   file: path.join(process.cwd(), '\\test\\prueba\\pruebita\\link.md'),
//   status: 404,
//   statusText: 'Fail',
// }];
// funcion opcion --stats
const stats = arrayObject => {
  const arrayLinks = arrayObject.map(element => element.href);
  const unique = [...new Set(arrayLinks)];
  const resultStats = `Total: ${arrayLinks.length}\nUnique: ${unique.length}`;
  return resultStats;
}; // console.log(stats(array));
// funcion opcion --validate --stats


exports.stats = stats;

const statValidate = arrayObject => {
  const arrayLinks = arrayObject.map(element => element.href);
  const unique = [...new Set(arrayLinks)];
  const Broken = arrayObject.filter(element => element.statusText === 'Fail');
  const resultStatsValidate = `Total: ${arrayLinks.length}\nUnique: ${unique.length}\nBroken: ${Broken.length}`;
  return resultStatsValidate;
}; // console.log(statValidate(array));
// Devuelve el array de objetos en string


exports.statValidate = statValidate;

const formatOutput = arrayObject => {
  let stringElement = '';
  arrayObject.forEach(element => {
    stringElement += `${element.file} ${element.href} ${element.status ? `${element.statusText} ${element.status}` : ''} ${element.text}\n`;
  });
  return stringElement;
}; // Otra opción para hacer el formatOutput es hacer con map y join('\n')


exports.formatOutput = formatOutput;