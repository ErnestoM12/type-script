interface BillAble1 {
    currentBill(): string
}

interface FlyAble {
    altitude(): string
}

class Vehicle {
    //readonly priva a la propia clase de modificar el attibuto
    constructor(
        protected readonly brandName: string,
        private readonly model: string,
        public readonly color: string,
        private price: number
    ) { }

    get getPrice() {
        return this.price
    }

    set setPrice(value: number,) {
        this.price = value
    }
    /*podemos acceder a nuestro funcion sin la nesecidad 
    instanciar la clase con new.
    En los metodos staticos tampoco podemos accesde 
    a las propidades del objeto con THIS a menos que 
    declremos una variable statica, esa si podria ser accesible
    */
    static PriceToCurrency(value: number, typeOfcurrency: string) {
        let result = ''

        switch (typeOfcurrency) {
            case 'USD':
                result = `USD ${value}`
                break;
            case 'PESO':
                result = `$ ${value}`
                break;
            default:
        }
        return result
    }

    //metodos
    drive(): void {
        console.log(`condiciendo  un  :${this.brandName} modelo:${this.model} de color:${this.color}`);
    }
}


const auto = new Vehicle('mandza', 'tsu', 'azul', 200);
console.log(auto);
console.log(auto.drive())
console.log(auto.getPrice);
//seter
auto.setPrice = 150
console.log(Vehicle.PriceToCurrency(auto.getPrice, 'PESO'));


/////Herencia////////

class goCart extends Vehicle implements BillAble1 {

    drive(): void {
        console.log(`Esty conduciendo otra auto ${this.brandName}`);
    }
    currentBill(): string {
        return 'la factuta actual es de 200'
    }

}
const car = new goCart('susuli', '3', 'azul', 100);
console.log(car);
console.log(car.drive())

///siempre que se agrega un interface en necesario agregar todo lo que contiene, atributos y funciones
class Airplain extends Vehicle implements BillAble1, FlyAble {


    currentBill(): string {
        return 'la factuta actual es de 300'
    }
    altitude(): string {
        return 'A una altura de 2300'
    }

}
const avion: BillAble1 = new Airplain('susuli', '3', 'azul', 100);
console.log('avion', avion.currentBill());





/////////////////////////////////
////////////////////////////////
///clases abstract////
///clases abstractas no se puede instaciar// 
///tambien los metodos abstractor tienen que ser sobreescritos en la clases hijas


abstract class MiClasePadre {
    constructor(
        protected readonly name: string,
    ) { }
    //se delega a las clases hijas
    abstract saluda(): void
}
class MiclaseHija extends MiClasePadre {
    saluda() {
        console.log(`hola ${this.name}`);
    }
}
const mivar = new MiclaseHija('ernesto')
console.log(mivar);








