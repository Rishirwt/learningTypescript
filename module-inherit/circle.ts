import { Shape } from "./shape";

class Circle extends Shape{
    constructor(x:number,y:number,private radius:number){
        super(x,y);
    }

    getinfo():string{
       return super.getinfo() +` radius : ${this.radius}`
    }
}

let c = new Circle(1,2,3);
console.log(c.getinfo());

