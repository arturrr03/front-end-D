//Asynchoronous JS


// //Synchronous -> single thread -> blocking
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses yg memakan waktu lama");
// console.log("Proses 4");

//Asynchoronous -> multi thread -> non blocking

//1. Parallel
// setTimeout(()=>{console.log("proses 1");
// }, 5000)
// console.log("proses 2");
// setTimeout(()=>{console.log("proses 3");
// }, 3000)
// console.log("proses 4");

//2. Concurrent (biasa dibuat dalam call back).

// setTimeout(()=>{console.log("proses 1");
//     setTimeout(()=>{console.log("proses 2");
//         setTimeout(()=>{console.log("proses 3");
//             setTimeout(()=>{console.log("proses 4");
//             }, 3000)
//         }, 3000)
//     }, 3000)
// }, 3000)

//Promise. cara buat dan cara pakai
// buat promise sederhana
// let condition = true
// const myPromise = new Promise((resolve,reject) =>{
//     if(condition){
//         resolve("Berhasil")
//     }else{
//         reject("Gagal")
//     }

// });

//pakai promise
// myPromise
// .then((result) => result)
// .then((result2) => console.log(result2))
// .catch((error) => console.log(error));


//2. Async - await
//harus dibuat dalam fungsi

// const consumePromise = async () => {
//     let result = await myPromise;
//     console.log(result);
    
// };
// consumePromise();

//pakai promise yang sudah ada

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=> response.json())
.then((json)=> console.log(json));

const fetch = async () =>{
    let result = await fetch;
    console.log(result);
    
};
fetch();

const fetchNames = async()=>{
    try{
        const response = await fetchNames("https://jsonplaceholder.typicode.com/users");
        const json = await response.json();

        const name = json.map(user=>user.name);
        console.log(name);
        
    }catch(error){
        console.error('Error', error)
    }

};

fetchNames();

//2. Axios 
const fetchName = async()=>{
    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        

        const name = json.map(user=>user.name);
        console.log(name);
        
    }catch(error){
        console.error('Error', error)
    }

};
fetchName();