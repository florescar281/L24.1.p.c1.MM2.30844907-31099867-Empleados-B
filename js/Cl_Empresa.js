export default class Cl_Empresa {
    constructor (){
        this.acumSueldo = 0
    }

    procesarEmpleados (e){
        this.acumSueldo += e.mostrarSueldos()
    }

    mostrarSueldos (){
        return this.acumSueldo
    }

}