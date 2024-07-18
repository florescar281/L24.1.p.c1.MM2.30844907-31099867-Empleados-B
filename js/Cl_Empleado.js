export default class Cl_Empleado {
    constructor (n, c, s){
        this.nombre = n
        this.cargo = c
        this.sueldo = s
    }

    set nombre(n){
        this._nombre = n
    }   
    get nombre(){
        return this._nombre
    }

    set cargo(c){
        this._cargo = c
    }
    get cargo(){
        return this._cargo
    }

    set sueldo(s){
        this._sueldo = s
    }
    get sueldo(){
        return this._sueldo
    }

    aumentarSueldo(){
        if (this.cargo == "Obrero"){
            return this._sueldo*0.2
        } else if (this.cargo == "Administrativo"){
            return this._sueldo*0.1
        }
    }

    mostrarSueldos(){
        return this._sueldo + this.aumentarSueldo()
    }

}