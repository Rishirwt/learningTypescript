
class Customer {

    private firstname:string;
    private lastname:string;

    constructor(firstname:string , lastname:string){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    public setfirstname(name:string):void{
        this.firstname = name;
    }
    public getfirstname():string{
        return this.firstname;
    }
    get getlastname(){
        return this.lastname;
    }
}

let cust = new Customer("rishabh","rawat");
// cust.firstname = 'Martin';
// cust.lastname = 'luther';

console.log(cust);
cust.setfirstname("rishi");
console.log(cust.getfirstname());
console.log(cust);
console.log(cust.getlastname);

