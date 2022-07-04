//const myvar = 1
//const mysecondvar = 2
//myvar + mysecondvar

const myobj = { prop1: 1, prop2: 2 } //Objects (dictionary, map)
const mystring = "a word" // Strings
const mynumber = 1 // Numbers

const myfunc = function(myarg1, myarg2, myarg3) {

    const mysum = myarg1 + myarg2 + myarg3

    return mysum
}

const thetruth = (typeof mynumber) !== "number"
// console.log(thetruth)

const myfalsyobject = null
const myfalsystring = ""
const myfalsynumber = 0

// const isthisfalsy = !myfalsystring
// console.log("What is this",1 + 1)

// const mysum = 1 + 1

// console.log(mysum + mysum)

// const myothersum = mysum + mysum

// if (1 === 2 && 3 == (4 !== 3)) {
//     console.log("it was true")
// } else {
//     console.log("it was false")
// }

function sumfunction(myfirstparam, mysecondparam){
    return myfirstparam + mysecondparam
}

// console.log(sumfunction(1,1))
// console.log(sumfunction(2,2))
// console.log(sumfunction(1,3))

const myvar1 = sumfunction(1,1)
const myvar2 = sumfunction(2,2)
const myvar3 = sumfunction(1,3)
