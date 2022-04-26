class Vehicle {
    //readonly priva a la propia clase de modificar el attibuto
    constructor(brandName, model, color, price) {
        this.brandName = brandName;
        this.model = model;
        this.color = color;
        this.price = price;
    }
    get getPrice() {
        return this.price;
    }
    set setPrice(value) {
        this.price = value;
    }
    /*podemos acceder a nuestro funcion sin la nesecidad
    instanciar la clase con new.
    En los metodos staticos tampoco podemos accesde
    a las propidades del objeto con THIS a menos que
    declremos una variable statica, esa si podria ser accesible
    */
    static PriceToCurrency(value, typeOfcurrency) {
        let result = '';
        switch (typeOfcurrency) {
            case 'USD':
                result = `USD ${value}`;
                break;
            case 'PESO':
                result = `$ ${value}`;
                break;
            default:
        }
        return result;
    }
    //metodos
    drive() {
        console.log(`condiciendo  un  :${this.brandName} modelo:${this.model} de color:${this.color}`);
    }
}
const auto = new Vehicle('mandza', 'tsu', 'azul', 200);
console.log(auto);
console.log(auto.drive());
console.log(auto.getPrice);
//seter
auto.setPrice = 150;
console.log(Vehicle.PriceToCurrency(auto.getPrice, 'PESO'));
/////Herencia////////
class goCart extends Vehicle {
    drive() {
        console.log(`Esty conduciendo otra auto ${this.brandName}`);
    }
    currentBill() {
        return 'la factuta actual es de 200';
    }
}
const car = new goCart('susuli', '3', 'azul', 100);
console.log(car);
console.log(car.drive());
///siempre que se agrega un interface en necesario agregar todo lo que contiene, atributos y funciones
class Airplain extends Vehicle {
    currentBill() {
        return 'la factuta actual es de 300';
    }
    altitude() {
        return 'A una altura de 2300';
    }
}
const avion = new Airplain('susuli', '3', 'azul', 100);
console.log('avion', avion.currentBill());
/////////////////////////////////
////////////////////////////////
///clases abstract////
///clases abstractas no se puede instaciar// 
///tambien los metodos abstractor tienen que ser sobreescritos en la clases hijas
class MiClasePadre {
    constructor(name) {
        this.name = name;
    }
}
class MiclaseHija extends MiClasePadre {
    saluda() {
        console.log(`hola ${this.name}`);
    }
}
const mivar = new MiclaseHija('ernesto');
console.log(mivar);
