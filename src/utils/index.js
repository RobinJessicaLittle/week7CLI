// npm innit -y, initialises the environment

// npm install yargs


// touch .gitignore


const movieArr = [];
// create Movie class for title and actor object
//this keyword refers to the object it belongs to
class Movie {
    constructor(title, actor, genre = 'Not specified'){
        this.title = title;
        this.actor = actor;
        this.genre = genre;
    }
    // small function to add cli input to movieArr
    add() {
        movieArr.push(this)
    }
    //added as part of task
    mov() {
        movieArr.push(this)
    }
};
//export objects to use elsewhere in app
module.exports = {Movie, movieArr};

////////////////////////////////////////////////
//My attempt at yargs, cat app
// const catsArr = [];

// class Cats {
//     constructor(breed, color, age = 'Not specified'){
//         this.breed = breed;
//         this.color = color;
//         this.age = age;
//     }
//     cat() {
//         catsArr.push(this)
//     }
// };

// module.exports = {Cats, catsArr};

