//Quick review on callbacks
function myfilterFunction () {

}
const array = [1,2,3,4]
array.filter(myfilterFunction)

//Typical callback on asynchronous processes
// Second 0.
setTimeout(() => {
    // Second 3
    console.log("im here after 3 seconds")
    const myfilteredarray = array.filter((element) => {
        if (element % 2 === 0) {
            return true
        }
        return false
    })
    console.log('filtering is done', myfilteredarray)

}, 3000)
//Second 0.00001
console.log('filtering is done')



//Promises
// Promise's callback function receives two arguments: 1st "success" callback, 2nd "error" callback
// they can be named anything since they are arguments in a function
const mypromise = new Promise((callmeWhenSuccess, callmeWhenError) => {
    // OUR PROCESS

    const filteredarray = array.filter((element) => {
        if (element % 2 === 0) {
            return true
        }
        return false
    })
    
    if (filteredarray.length === 0) {
        callmeWhenError(1) // Error code 1: only odd numbers found
    }
    if (filteredarray.length === array.length) {
        callmeWhenError(2) // Error code 2: no filtering was done
    }
    setTimeout(() => callmeWhenSuccess(filteredarray), 3000)
})


// This will work because MyAsyncFunction is declared with "async" and await will not
// throw error
async function MyAsyncFunction() {
    try {
        const filteredarray = await mypromise
    } catch(myerror) {
        if (myerror === 1) {
            console.log('provide other array')
        } else if(myerror === 2) {
            console.log('nothing needs to be done, no odd numbers')
        }
    }
}

// This will not work because Simplefunction is not async function and await cannot be
//used here
function Simplefunction() {
    await mypromise
}

// Design Pattern: Chain of responsability
const thefinalarraypromise = mypromise.then((filteredarray) => {
    return filteredarray.filter((element) => element === 2 ? false : true)
}).then((nonumbers2) => {
    return [...nonumbers2, 11]
}).then((nonumbers2plus11) => {
    return nonumbers2plus11.length >= 1 ? nonumbers2plus11 : [11]
})

const promiseWithoutNumberTwo = mypromise.then((filteredarray) => {
    return filteredarray.filter((element) => element === 2 ? false : true)
})

const arraywith11promise = promiseWithoutNumberTwo.then((nonumbers2) => {
    return [...nonumbers2, 11]
})

const thefinalarray2promise = arraywith11.then((nonumbers2plus11) => {
    return nonumbers2plus11.length >= 1 ? nonumbers2plus11 : [11]
})

const remove11process = arraywith11promise.then((arraywith11) => {
    return arraywith11.filter((element) => element === 11 ? false : true)
})



console.log('filtered array is', filteredarray)