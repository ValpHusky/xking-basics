// const myobj = { prop1: 1, prop2: 2 }

const myarray = [1,1,2,3,5,8,11,23]
const fruits = ["apples","melons","peaches","pineapples"]
const sodas = ["coca-cola","sprite","pepsi","dr pepper"]
const chips = ["doritos","lourdes","lays"]


// 2-dimension array
const store1 = [fruits,sodas,chips]
const store2 = [fruits,sodas]
const store3 = [sodas,chips]

// const accessedarray = store[1]
// console.log("Accessed soda",accessedarray[2])

//3-dimensional array
const branches = [store1,store2,store3]

//FOR APPROACH
for (var b = 0; b < branches.length; b++) {
    for (var g = 0; g < branches[b].length; g++) {
        for (var t = 0; t < branches[b][g].length; t++) {
            console.log(branches[b][g][t])
        }
    }
}

//Deconstruction to assign value to variable
// const apples = myarray[0]
// const pears = myarray[1]
// const melons = myarray[2]

const [ apples, pears, melons ] = myarray
console.log('deconstructed', apples, pears, melons)


//Deconstruction to merge
const store1Deconstructed = [...fruits,...sodas,...chips] 
console.log('store1Deconstructed', store1Deconstructed)




// Map method
// 1st cycle => mymapCallback("dog", 0, ["dog","cat","lizard"])
// 2nd cycle => mymapCallback("cat", 1, ["dog","cat","lizard"])
// 3rd cycle => mymapCallback("lizard", 2, ["dog","cat","lizard"])
const simpleArray = ["dog","cat","lizard"]
function mymapCallback(element, index, originalArray) {
    console.log('MAP',element, index, originalArray)

    switch(element) {
        case "dog":
            return "puppy"
            break
        case "cat":
            return "kitty"
            break
        case "lizard":
            return "lizzy"
            break;
        default:
            return "?"
    }
}
const newarray = simpleArray.map(mymapCallback)

console.log("newarray", newarray)

const thequestionmarkarray = newarray.map(mymapCallback)

console.log("thequestionmarkarray", thequestionmarkarray)


// ANOTHER MAP EXAMPLE
const numbers = [1,1,2,3,5,8,11,23]
const divided = numbers.map((n, i) => n === 1 ? n : n/2)
console.log('divided', divided)


const myobj = {
    random: function(callback) {
        callback(Math.random())
    }
}

//Random is a method because it belongs to an object. But its data type is a function
myobj.random((r) => console.log("random number is", r))
// Plain function
const randomFunction = () => Math.random()


//Array Filter
const arrayToFilter = ["apple","pear","peach","banana"]
const myfilteredArray = arrayToFilter.filter((element, index, originalArray) => {
    const thefirstcharacter = element.charAt(0)
    return thefirstcharacter === "p"
})

console.log("Original Array To Filter", arrayToFilter)
console.log("Filtered Array", myfilteredArray)

const mystring = "apple"
const mystringAsComputerReadsIt = ["a","p","p","l","e"]




