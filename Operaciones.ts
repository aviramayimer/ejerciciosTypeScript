export class Operaciones {
    
    private num1:number
    private num2:number
   

    constructor(num1:number, num2:number){
        this.num1 = num1;
        this.num2 = num2
     }

    public getNum1():number{
        return this.num1
    }
    public getNum2():number{
        return this.num2
    }
   
    
    public setNum1(num1:number){
        this.num1 = num1
    }
   
    public setNum2(num2:number) {
        this.num2 = num2
    }

    public Sumar(num1:number, num2:number){
        console.log(num1 + num2);
    }
    public Restar(num1:number, num2:number){
        console.log(num1 - num2);
    }
    public Multiplicar(num1:number, num2:number){
        console.log(num1 * num2);
    }
    public Dividir(num1:number, num2:number){
        console.log(num1 / num2);
    }
    
   
}