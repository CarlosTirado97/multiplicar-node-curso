const fs = require('fs');


let listarTabla = async(base, limite) => {

    if (!Number(base) && !Number(limite)) {
        throw Error(`La base ${base} y el limite ${limite} no son numeros`)

    } else if (!Number(base)) {
        throw Error(`La base ${base} no es un numero`)

    } else if (!Number(limite)) {
        throw Error(`El limite ${limite} no es un numero`)

    } else {
        let tabla = '';
        for (let x = 1; x <= limite; x++) {
            tabla = tabla + `${base} x ${x} = ${base*x}\n`;
        }
        return tabla;
    }


}

let crearArchivo = async(base, limite) => {
    if (!Number(base) && !Number(limite)) {
        throw new Error(`La base ${base} y el limite ${limite} no son numeros`);
    } else if (!Number(base)) {
        throw new Error(`La base ${base} no es un numero`);
    } else if (!Number(limite)) {
        throw new Error(`El limite ${limite} no es un numero`);
    } else {
        let crearTabla = '';
        for (let x = 1; x <= limite; x++) {
            crearTabla = crearTabla + `${base} x ${x} = ${base*x}\n`;
        }
        fs.writeFile(`./tablas/tabla-${base}.txt`, crearTabla, (err) => {
            if (err) {
                console.log(err);
            }


        })
    }
}

module.exports = {
    crearArchivo,
    listarTabla
};