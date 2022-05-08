/*
  node main.js
*/

const logger1 = require('./logger_1')
const logger2 = require('./logger_2')

logger1('Aqui lo que dice logger 1 y se declara info desde el contenido')
logger2.verbose('Exportando el contenido de verbose y se declara info desde el contenido')

/* esto se exporta desde los carriles de logger1 y 2 respectivamente alla se encuentran las instrucciones de exportacion e imprecion  */