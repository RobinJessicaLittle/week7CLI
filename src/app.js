
//
const yargs = require('yargs');

const {Movie, movieArr} = require('./utils')

// console.log(process.argv);
console.log(yargs.argv);

             //placeholder
const app = (yargsObj) => {
    if(yargsObj.add) {
        const movie = new Movie(yargsObj.title, yargsObj.actor);
        movie.add();
        console.log(movieArr);
    } else {
        console.log('incorrect Commande')
    }
};

app(yargs.argv);

//node src/app.js --add --title='pulp fiction' --actor='Sam L Jackson'
//put above in terminal to return object and what you want to add is inside the quotes