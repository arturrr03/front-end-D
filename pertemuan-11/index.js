//1. String Literals
// let fullName = "John Doe";
// let age = 30;
// let addres = "Manado";


// let kalimat1 = "Halo nama saya " + fullNmae + ", umur saya " + age + "tahun dan saya tinggal di"+ addres;
// console.log(kalimat1);

// let kalimat2 = `Halo nama saya ${fullNmae}, umur saya ${age} tahun dan saya tinggal ${addres}`;

// console.log(kalimat2);

// 2. Arrow Function
// function sayGreetings(fullName){
//     return `Hello my name is ${fullName}`;
    
// }
// console.log((sayGreetings("John Doe")));

// const sayGreetings2 = () => {
//     return `Hello my name is ${fullName}`;
// }
// console.log(sayGreetings2("Jonh Doe"));

// let output1 =(()=> "Hello")();

// let numbers = [1,2,3,4,5];
// let output2 = numbers.map((item)=> item);
// console.log(output2);


//3. Default Parameter

const sayGreetings3 =(fullName,age,addres)=>{
    if(!fullName){
        fullName = "John Doe";
    }
    if (!age){
        age = 30;
    }
    if (!addres) {
        addres = "Manado";        
    }
    console.log(`Hallo nama saya ${fullName}, umur saya ${age} tahun dan saya berasal ${addres}`);

    
}
sayGreetings3("Artur",21,"Langowan")


const sayGreetings4 = (fullName="John Doe",age=30,addres="Manado") => {
    console.log(`Hallo nama saya ${fullName}, umur saya ${age} tahun dan saya berasal ${addres}`);

}
sayGreetings4()