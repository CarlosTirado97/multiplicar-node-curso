const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors/safe');
let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then((tabla) => {
                console.log(tabla);
            })
            .catch((error) => {
                console.log(error);
            })
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => {
                console.log(colors.green(`tabla-${argv.base}.txt creado con exito`));
            }).catch((err) => {
                console.log(err);
            });
        break;

    default:
        console.log('comando no reconocido');
        break;
}