export{ }

// for( let i=0;i<5;i++){
//     console.log(i);
// }

 //let ar:string[] = ['tennis','cricket','golf'];
// for(let i =0;i<ar.length;i++){
//     console.log(ar[i])
// }


// simplified for loop

// for(let s of ar){
//     console.log(s);
// }

let numbers1 : number[] = [1,2,3,4,5.5];
let total1:number = 0;
for(let i=0;i<numbers1.length;i++){
    console.log(i);
    total1+=i;
}

console.log(total1/numbers1.length);
