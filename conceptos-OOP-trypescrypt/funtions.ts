//funciones
const sum2 = (a: number, b: number): number => a + b
console.log(sum2(1, 2));
//declarar metodos
const throwError = (message: string): never => {
    throw new Error(message);
}
const throwError2 = (message: string): void => {
    throw new Error(message);
}

//heredar funcion 
let nuevaSuma: (a: number, b: number) => number
nuevaSuma = sum2

console.log(nuevaSuma(2, 2));


/// callback
const nuevaF = (a: number, b: number, mostrar: (value: number) => void): void => {
    const result = a + b;
    mostrar(result)
}
nuevaF(100, 100, (b) => console.log(b))





