
// save yargs to variable using require keyword
const yargs = require("yargs");

// require objects we need from utils folder
// by default node looks for index.js, so we don't need to specify
const { Movie, movieArr } = require("./utils")

// example of yargs structure
console.log(yargs.argv);

// functinality to check user input and save data
// pass in YargsObj as permameter 
const app = (yargsObj) => {
    if(yargsObj.add) {
        // use new Movie class to collect data
        const movie = new Movie(yargsObj.title, yargsObj.actor, yargsObj.genre);
        // use add function to save data to array
        movie.add();
        console.log(movieArr);
        //added as part of task
    }else if(yargsObj.movie) { 
        const movie = new Movie(yargsObj.title, yargsObj.actor, yargsObj.genre);
        movie.mov();
        console.log(movieArr)


    }else {
        console.log("Incorrect Command")
    }
};

// call app function and pass in terminal input as arguements
app(yargs.argv);

//node src/app.js --add --title='pulp fiction' --actor='Sam L Jackson' too print if
//node src/app.js --mov --title='green mile' --actor='Tom Hanks' --genre='thriller' too print else if
//put above in terminal to return object and what you want to add is inside the quotes


////////////////////////////////////////////////
//My attempt at yargs, cat app
// const yargs = require('yargs');

// const {Cats, catsArr} = require('./utils')

// console.log(yargs.argv);

// const app2 = (yargsObj) => {
//     if (yargsObj.add) {
//         const plants = new Cats (yargsObj.breed, yargsObj.color, yargsObj.age);
//         plants.cat();
//     }else{
//         console.log('Cat not recognised')
//     }
// };
// app2(yargs.argv)

// src/app.js --add --breed='moggy' --color='grey' --age='9'
//when example is commented out (as yargs has already been declared)
//my rty works in the terminal