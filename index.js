// . Write a function called extractKey which accepts two parameters, an array of objects, and the name of a key and returns an array with just the values for that key.

 // ["Elie", "Tim", "Matt"]

function extractKey (arr, key) {
    let str = []
    for (let i =0; i < arr.length; i++) {
        str.push(arr[i][key])
    }
    return str
}
console.log(extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name"));

// OR

function extractKey(arr, key) {
    let str = []

    arr.forEach(element => {
        str.push(element[key])
    })

    return str
}

console.log(extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name"));

// Write a function called filterLetters which accepts an array of letters and returns the number of occurrences of a specific letter. This function should be case insensitive

// filterLetters(["a","a","b","c","A"], "a"); // 3
// filterLetters(["a","a","b","c","A"], "z"); // 0
// filterLetters(["a","a","b","c","A"], "B"); // 1

function filterLetters (arr, str) {

    let count = 0
    arr.filter((element) => {
        if ( element == str.toLowerCase() || element == str.toUpperCase()) {
            count += 1;
        }  
    })
    return count
}

console.log(filterLetters(["a","a","b","c","A"], "B"));

// Write a function called printFirstAndLast which accepts an array (of objects) and console.logs a new string with the first character and the last character of each value.
// printFirstAndLast(['awesome','example','of','forEach'])

// ae
// ee
// of
// fh

function printFirstAndLast (arr) {

    let chr = ""

    arr.map((element) => {
        chr += element.at(0)
        chr += element.at(-1)
        chr += "\n"
    })
    return chr
}

console.log(printFirstAndLast(['awesome','example','of','forEach']));

// Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:

valTimesIndex([1,2,3]) // [0,2,6]
valTimesIndex([5,10,15]) // [0,10,30]

function valTimesIndex (arr) {
     
    return arr.map (( element, index) => {
        return element * index
    }) 
    
}

console.log(valTimesIndex(([5,10,15])))

// Write a function called addKeyAndValue which accepts three parameters, an array (of objects), a key and a value. This function should return the array of objects after each key and value has been added. You can do this a few ways, either by reducing starting with an empty array and making copies of the object or by starting with the actual array!
addKeyAndValue([{name:'Joshua'},{name:'Mark'},{name:'Arthur'}],"isInstructor", true);

/*
[
    {
        name: 'Joshua',
        isInstructor: true
    },
    {
        name: 'Mark',
        isInstructor: true
    },
    {
        name: 'Arthur',
        isInstructor: true
    }
]
*/

function addKeyAndValue (arr, key, val) {
    return arr.reduce ((acc, element) => {
        acc = Object.assign(arr)
        element[key] = val
        return acc
    },[])

}

console.log(addKeyAndValue([{name:'Joshua'},{name:'Mark'},{name:'Arthur'}],"isInstructor", true));


let users = [

    {
      username: 'larry',
      email: 'larry@foo.com',
      yearsExperience: 22.1,
      favoriteLanguages: ['Perl', 'Java', 'C++'],
      favoriteEditor: 'Vim',
      hobbies: ['Fishing', 'Sailing', 'Hiking'],
      hometown: {
        city: 'San Francisco',
        state: 'CA'
      }
    },
    {
      username: 'jane',
      email: 'jane@test.com',
      yearsExperience: 33.9,
      favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
      favoriteEditor: 'Emacs',
      hobbies: ['Swimming', 'Biking', 'Hiking'],
      hometown: {
        city: 'New York',
        state: 'NY'
      }
    },
    {
      username: 'sam',
      email: 'sam@test.com',
      yearsExperience: 8.2,
      favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
      favoriteEditor: 'Atom',
      hobbies: ['Golf', 'Cooking', 'Archery'],
      hometown: {
        city: 'Fargo',
        state: 'SD'
      }
    },
    {
      username: 'anne',
      email: 'anne@test.com',
      yearsExperience: 4,
      favoriteLanguages: ['C#', 'C++', 'F#'],
      favoriteEditor: 'Visual Studio Code',
      hobbies: ['Tennis', 'Biking', 'Archery'],
      hometown: {
        city: 'Albany',
        state: 'NY'
      }
    },
    {
      username: 'david',
      email: 'david@test.com',
      yearsExperience: 12.5,
      favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
      favoriteEditor: 'VS Code',
      hobbies: ['Volunteering', 'Biking', 'Coding'],
      hometown: {
        city: 'Los Angeles',
        state: 'CA'
      }
    }
  ];
  
//    Write a function called printEmails which console.log's each email for the users.
  printEmails();
  // larry@foo.com
  // jane@test.com
  // sam@test.com
  // anne@test.com
  // david@test.com

  function printEmails () {

    let str = ""

    for (let user of users) {
        str += user.email + "\n"
        
    }
    return str
  }

  console.log(printEmails());

//   
// Write a function called printHobbies which console.log's each hobby for each user.

printHobbies();
// "Fishing",
// "Sailing",
// "Hiking",
// "Swimming",
// "Biking",
// "Hiking",
// "Golf",
// "Cooking",
// "Archery",
// "Tennis",
// "Biking",
// "Archery",
// "Volunteering",
// "Biking",
// "Coding",




  
