const fruit = { taste: 'acid', color: 'red', weight: 1.4 }
// const taste = fruit.taste
// const color = fruit.color
// const weight = fruit.weight

// Deconstructring to assign variables
const { weight, taste, color } = fruit
console.log(taste, color, weight)

// Fusing objects with deconstruction
const seed = { color: 'brown', shape: 'round' }
const fruitAndSeed = { ...fruit, ...seed, price: 5  }



console.log('fruitAndSeed', fruitAndSeed)

//Iterating object
for(let i in fruit) {
    console.log(fruit[i])
}



const fromjson = {
    "something": 3,

    "compilerOptions": {
      "incremental": true,
      "target": "es6",
      "module": "commonjs",
      "outDir": "build",
  
      "strict": true,
      "noImplicitAny": true,
      "strictNullChecks": true,
      "strictFunctionTypes": true,
      "strictBindCallApply": false,
      "strictPropertyInitialization": false,
      "noImplicitThis": false,
      "alwaysStrict": true,
  
      "noUnusedLocals": true,
      "noUnusedParameters": true,
      "noImplicitReturns": true,
      "noFallthroughCasesInSwitch": true,
  
      "moduleResolution": "node",
      "esModuleInterop": true,
  
      "experimentalDecorators": true,
      "emitDecoratorMetadata": true,
  
      "forceConsistentCasingInFileNames": true,
      "resolveJsonModule": true,
      "typeRoots": [
        "node_modules/cir-incube-persistence/lib/catalogues",
        "node_modules/cir-incube-persistence/lib/entities",
        "node_modules/cir-incube-persistence/lib/models"
      ]
    }
  }

fromjson.something = 213123424
console.log(fromjson.compilerOptions.strict)

fromjson.compilerOptions.strict = "anything"

const likethis = 1

//JSON AND OBJECTS

const myjson = '{ "compilerOptions": {}, "something": 9 }'
const myobject = JSON.parse(myjson);

console.log("myjson", myjson, typeof myjson)
console.log("myobject", myobject, typeof myobject)

console.log('myobject.something', myobject.something);
console.log('myjson.something', myjson.something);