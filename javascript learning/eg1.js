console.log("script start");
const btns = document.querySelectorAll(".btns");
// btns.forEach(function(button){
//     button.addEventlistener("click", (event)=>{
//         console.log(event.target);
//     })
// })
// console.log(btns)

// btns.forEach((btn) => {
    
//         btn.addEventListener("click", (e) => {

//             let num = 0;
//             for (let i = 0; i <= 1000000000; i++) {
//                 num += i;
//                 // console.log(num);
//             }
//             console.log(e.currentTarget.textContent);

//         })

// })
// let xyz = 0
//     for (let j = 0; j <= 1000000000; j++) {
//         xyz += j;

//     }
//     console.log("click by shailesh");



//POST METHOD

fetch('https://jsonplaceholder.typicode.com/albums/1/photos',
{
    method:'GET',
    headers:{
        'Content-type':"application/json"
    }
}).then((response)=> response.json()).then((json)=>{
    console.log(json);
})