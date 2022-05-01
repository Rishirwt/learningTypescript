
export class Shape{
    constructor(private x:number,private y:number){
    console.log("shape cons called")        
 }

getinfo():string{
    return `x : ${this.x} y : ${this.y}`; 
 }
}