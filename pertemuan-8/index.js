//Javascript loop
//1. for - loop

// Array Onject
let students = [
    {
        id: 1,
        firstName: "John",
        grade: 80,
    },
    {
        id: 2,
        firstName: "Jane",
        grade: 90,
    },
    {
        id: 3,
        firstName: "Bob",
        grade: 100,
    },
];
//Menampilkan semuanya
console.log(students);
//Menampikan satu persatu
// for (let i=0; i<students.length; i++){
//     console.log(students[i]);
// }


//2. While - loop
// let i = 0;
// while (i <students.length){
//     console.log(students[i]);
//     i++;
// }


// //3. do - while loop
// let i = 0;
// do{
//     console.log(students[i]);
//     i++;
// }while (i < students.length);
// do excute dlu baru di cek kondisi nya
// kalau while cek dlu kondisi nya baru di jalankan

// Array built-in method
//1. forEach()
// students.forEach(function(item, index){
//     console.log(index);
//     console.log(item);
// });

//2. map()
// let output = students.map(function(item){
//     return item;
// });
// console.log(output);

// beda foreach dan map itu kalau foreach tidak return tapi kalau map memiliki return
// // 3. filter()
// let output = students.filter(function(item){
//     return item.grade >= 90;
// });
// console.log(output);
// // beda filter dan find adalah kalau filter menampilkan semua yang ada kalau find hanya menampilkan yang paling atas.

// // 4 find()
// let output1 = students.find(function(item){
//     return item.grade >= 90;
// });
// console.log(output1);

// //5. findIndex()
// let index = students.findIndex(function(item){
//     return item.firstName === "Jane";
// });
// console.log(index);
// Mini Exercise
