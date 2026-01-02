// console.log(1);

// setTimeout(() => {
//   console.log("hello world")
// }, 1000);

// console.log(2)

// console.log("start")

// function printUsername(username, cb){
//   setTimeout(()=>{
//     cb(username)
//   }, 1000)
// }

// console.log("Stop")

// const result = printUsername("Sumit", (message)=>{
//   console.log(message)
// })

// console.log("start");

// function subscribe(channelName, cb) {
//   setTimeout(() => {
//     cb(channelName);
//   }, 1000);
// }

// function like(videoTitle, cb) {
//   setTimeout(() => {
//     cb(videoTitle);
//   }, 2000);
// }

// function share(playlistName, cb) {
//   setTimeout(() => {
//     cb(playlistName);
//   }, 3000);
// }

// subscribe("take u forward", (channelName) => {
//   console.log(channelName);
//   like("Find the shortest path", (array) => {
//     console.log(array);
//     share("LinkedList", (playListName) => {
//       console.log(playListName);
//     });
//   });
// });

// console.log("stop");

// console.log("start");

// const fun = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     const flag = true
//     if(flag) resolve("Green Flag")
//     else reject("Red flag")
//   }, 2000)
// })

// fun.then((res)=>{
//   console.log(res)
// }).catch((error)=>{
//   console.log(error)
// })

// console.log("stop");

// console.log("start");

function subscribe(channelName) {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      reject(channelName);
    }, 1000)
  });
}

function like(videTitle) {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(videTitle);
    }, 1000)
  });
}

function share(playListName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(playListName);
    }, 500);
  });
}

// subscribe("Rodeside coder")
//   .then((res) => {
//     console.log(res);
//     like("2 pointer")
//       .then((res) => {
//         console.log(res);
//         share("Linkedlist")
//           .then((res) => {
//             console.log(res);
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log("stop");

// best way is promise chaninig

// subscribe("Rodeside coder")
// .then((res)=>{
//   console.log(res)
//   return like("2 pointer")
// }).then((res)=>{
//   console.log(res)
//   return share("Linkedlist")
// }).then((res)=>{
//   console.log(res)
// }).catch((error)=>{
//   console.log(error)
// })

// promise combinators
// 1. all-> return all the resolve promise if any one fails reject the promise with same order we provided in the array

// Promise.all([subscribe("Rodeside coder"), like("2 pointer"), share("Linkedlist")])
// .then((res)=>{
//   console.log(res)
// }).catch(error=>console.log(error))

// 2. race-> return 1st promise either fulfiled or rejected

// Promise.all([subscribe("Rodeside coder"), like("2 pointer"), share("Linkedlist")])
// .then((res)=>{
//   console.log(res)
// }).catch(error=>console.log(error))

// 3. allSateled-> it returns all of the fulfilled and rejected promise

// Promise.allSettled([subscribe("Rodeside coder"), like("2 pointer"), share("Linkedlist")])
// .then((res)=>{
//   console.log(res)
// }).catch(error=>console.log(error))

// 4. any -> it return 1st fulfilled promise and ignore rejected one. if all promise failed the it will through the error

// Promise.any([subscribe("Rodeside coder"), like("2 pointer"), share("Linkedlist")])
// .then((res)=>{
//   console.log(res)
// }).catch(error=>console.log(error))

console.log("Start")

async function printLama(){
  const ans = await share('TMKC')
  console.log(ans)
}

printLama().then((res)=>console.log(res)).catch((error)=>console.log(error))

console.log("Stop")

// create a function which accept the promise array and resove it recursively

// function recPro(promiseArr){
//   if(promiseArr.length === 0) return;

//   let currentPromise = promiseArr.shift();

//   currentPromise.then((res=>console.log(res))).catch((error)=>console.log(error))

//   recPro(promiseArr)
// }

// recPro([subscribe("Rodeside coder"), like("2 pointer"), share("Linkedlist")])

// polyfils for promise combinators


