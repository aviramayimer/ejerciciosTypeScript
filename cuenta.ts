export class Cuenta{

    private titular:string;
    private valorActual:number;

    constructor(titular:string, valor:number){
        this.titular = titular;
        this.valorActual = valor;
    }

    public getTitular():string{
        return this.titular;
    }
    public getValorAcutal():number{
        return this.valorActual;
    }

    public setTitular(titular:string){
        this.titular = titular
    }
    public setValorActual(valorActual:number){
        this.valorActual = valorActual;
    }

    public mostrarDatos(){
        console.log("titular: " + this.titular +
        "el valor actual es: " + this.valorActual);
    }
    public IngresarCanitdad(cantidad:number){
        if (cantidad < 0) {
            console.log("**El valor ingresado no es valido**");    
        }
        else{
            let nuevaCantidad= this.valorActual + cantidad;
            console.log("su nueva cantidad es: " + nuevaCantidad);
            
        }

    }
    /**
     * RetirarCantidad
    */
 public RetirarCantidad(retirarValor:number) {
        console.log("valor actual es:", this.valorActual,
        "\nvalor a retirar es: ", retirarValor, 
        "\nvalor ingresado para retirar es: ", retirarValor,
        "\nvalor actual de la cuenta es: ", this.valorActual-retirarValor);
        
    }
}

