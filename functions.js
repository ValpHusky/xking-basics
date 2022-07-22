// Functions arguments
function myfunction (parameter2) {
    console.log(parameter2)
}

myfunction("dog", 1, false)


//Callbacks
function asyncprocess (yourcallback) {
    yourcallback(Math.random(), Date.now())
}

asyncprocess((timestamp) => console.log('timestamp', timestamp))


// Weird way to declare functions and asign to variables
const otherfunction = function myfunction (){
    console.log("Does the name myfunction exist inside myfunction",typeof myfunction)
}
otherfunction()
console.log("Does the name myfunction exist outside", typeof myfunction)


//Useful callbacks
function alarm(callback, howlong) {
    setTimeout(callback, howlong)
    // setTimeout(() => {
    //     callback()
    // }, 3000)
}

function rebootComputer() {
    console.log("Computer rebooting started...")
}

// if(computerErrors) {
//     rebootComputer()
// }

alarm(() => console.log("my first alarm"), 3000)
alarm(() => console.log("my second alarm"), 6000)

alarm(rebootComputer, 5000)


//Pure Functions

const screenSizeWidth = 1250
const screenSizeHeight = 800

//This is not a pure Function ->
function aspecRatioOfScreen() {
    return screenSizeWidth / screenSizeHeight
}

function highDensityVersion() {
    return [screenSizeWidth * 2,screenSizeHeight * 2]
}

function pureAspectRatioOfScreen(width, height, beforeDone) {
    rebootComputer() // Side effect: Calling a function within a function that is not a callback
    // beforeDone()
    return width / height
}

console.log("non-pure functions ratio", aspecRatioOfScreen())
console.log("pure functions ratio", pureAspectRatioOfScreen(screenSizeWidth, screenSizeHeight, rebootComputer))
console.log("some other ratios", pureAspectRatioOfScreen(1280,600), pureAspectRatioOfScreen(600,600), pureAspectRatioOfScreen(5000,1000))

// TODO:
// 1. Promises and async/await

