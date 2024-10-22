//Object in Java script & conditional
// Deklarasi object
// Object literal
let john = {
    firstName : "john", // properti & value
    age : 30,
    isMarried :true,
    grade : [80,90,100],
    sayGreetings: function(){
        console.log("Hello my name is " + this.firstName); // this for call object sendiri
        
    },
    address :{
        street: "Jl. Arnold Mononutu",
        city: "Minahasa utara",
        province:"Sulawesi Utara",
        postalCode: 95271,
    },

};
console.log(john);

// Mengakses properti dalam obejct
//1. Dot notation
console.log(john.firstName); // john
console.log(john.age); // 30
john.age = 31; // ubah 30 ke 31
john.job = "Teacher"; // tambah properti baru
console.log(john);

//2. Bracket notation
console.log(john["isMarried"]); //true
john["nationality"] = "indonesia"; // tambah properti baru
console.log(john);
// Object Method 
john.sayGreetings();
//Object inside object
console.log(john.address.city);
//Delete Properti object
delete john.grade;
console.log(john);

// JavaScript Conditional
//1. if - else

// Temperatur > 37 tampilkan cuaca pansa
// else tampilkan cuaca dingin

temp = 34 
if (temp >= 37){
    console.log("Cuaca hari ini panas");
    
}else{
    console.log("Cuaca hari ini dingin")
}

//2. if - else if - else
//Jika nilai 100-80 grade A
//Jika nilai 80-70 grade B
//Jika nilai 70-50 grade C
//Jika nilai < 50 grade D

let nilai = 65
if (nilai>80 && nilai <= 100){
    console.log("Grade A");
    
}else if (nilai >=70 && nilai < 80){
    console.log("Grade B");
}else if (nilai >=50 && nilai < 70){
    console.log("Grade C")
}else{
    console.log("Grade D")
}
// Switch - case
// 1 tampilkan januari
// 2 tampilkan februari
// 3 tampilkan Maret
// ...... 12 Desember

let month = 3 
switch(month){
    case 1 :
        console.log("Januari");
        break;
    case 2 :
        console.log("februari");
        break;
    case 3 :
        console.log("Maret")
        break;      
}



