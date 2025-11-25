function makeCounter() {
    let value=0 ;
    return function () {
        value++ ;
        console.log(value) ;
    }
}

const counter1 = makeCounter() ;
counter1() ;
counter1() ;
counter1() ;

const counter2 = makeCounter() ;
counter2() ;
counter2() ;