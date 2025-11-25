console.log("Start") ;
setTimeout(() => {
    console.log("Timeout finished") ;
} , 1000) ;

Promise.resolve().then(() => {
    console.log("Promise resolved") ;

});

console.log("Sayonara")