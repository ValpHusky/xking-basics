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

async function filterOutAll2(array) {
    return array.filter((element) => element === 2 ? false : true)
}

async function adding11(array) {
    return [...array, 11]
}

async function remove11(array) {
    return array.filter((element) => element === 11 ? false : true)
}

//Chaining with async/await using await give you the values from the promise that is created by aysnc functions 
async function main() {
    const filteredarray = await mypromise
    const no2array = await filterOutAll2(filteredarray)
    const no11array = await remove11(no2array)
    const with11 = await adding11(no11array)

}