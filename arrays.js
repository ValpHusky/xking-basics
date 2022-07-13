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

