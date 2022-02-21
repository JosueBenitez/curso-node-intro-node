//const { argv } = require('process');

const {crearTablaMultiplicar} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');
// console.log('===============================')
// console.log('           Table del 5')
// console.log('===============================')
// console.log(process.argv)
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=')
// console.log(base)

//const base = 6;
// fs.writeFile(`table-${base}.txt`, salida,(error)=>{
    // if(error)throw error;
    // console.log(`Tabla-${base} creada`)
    // })
    console.log(argv.base,argv.listar)
crearTablaMultiplicar(argv.base,argv.listar, argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow))
    .catch(error => console.log(error));



