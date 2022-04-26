const sum = (a: number, b: number) => {
    return a + b

}

console.log(sum(12, 30));


console.log('\n\n-----------------------');
console.log('object y array');
console.log('-----------------------');
//types
const myVar: string = ''
const myNumer: number = 0
const myBol: boolean = false

const person: {
    name: string;
    pais: string,
    edad: number,
    direccion: {
        calle: string
        colonia: string
    },
    hobbies: string[],
    cursos: object[],
    otrosDetalles: any[]

} = {
    name: 'ernesto',
    pais: 'mexico',
    edad: 10,
    direccion: {
        calle: 'cedro',
        colonia: 'olveras'
    },
    hobbies: [],
    cursos: [{ name: 'hola' }, { name: 'jorge' }],
    otrosDetalles: []

}


console.log(person.cursos);
console.log('\n\n-----------------------');
console.log('Tuplas');
console.log('-----------------------');
//
const automivl: [string, number, string] = ['mand', 2020, 'rojo']
//reutilizar
type vehiculoType = [string, number, string];
const motocicleta: vehiculoType = ['mand', 2020, 'rojo']
const motoneta: vehiculoType = ['mand', 2020, 'rojo']
console.log(automivl);

console.log(person.cursos);
console.log('\n\n-----------------------');
console.log('Enums');
console.log('-----------------------');


// interface child {
//     name: string,
//     pais: string,
//     edad: number
//     role: number
// }


enum role { estudiante, profesor }
type child = {
    name: string,
    pais: string,
    edad: number
    role: number
}
const tipo = role.profesor
const newChild: child = { name: 'ernesto', pais: 'mexico', edad: 12, role: tipo }
console.log(newChild);

console.log('\n\n-----------------------');
console.log('padlef');
console.log('-----------------------');

type StringOrNumber = string | number
const padLef = (value: string, padding: StringOrNumber) => {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;

    }

    if (typeof padding === 'string') {
        return padding + value;
    }
    throw new Error(`Esperaba un string pero recibi: ${typeof (padding)}`)

}

console.log(padLef('Hola mundo', 'hola ernesto'));









