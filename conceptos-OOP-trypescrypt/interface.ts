//enum 
enum Role {
    Doctor,
    Asistence,
    Emfermera
}

//las interfaces son solo para definiar estructuras de un objeto
interface Staff {
    name: string,
    email: string,
    role: Role
}
interface BillAble {
    total: number,
    currentBill(): string
}

//cons medico 
const medico = {
    name: 'martin',
    email: 'martin@test.com',
    role: Role.Doctor,
    total: 25,
    currentBill() {
        return `Valor actual de la fatura 
        es de ${this.total}`
    }
}

//funciones de imprimir 
const printStaff = (staff: Staff) => {
    console.log(staff)

}

const printCurrenBill = (bill: BillAble) => {
    console.log(bill.currentBill());
}
//imptimir el objeto medico
printStaff(medico);

///si el objeto los atributos suficiente que se asginaron a las interface
//se puede usar el mismo
printCurrenBill(medico)
