const people = [{
        name: 'Wes',
        year: 1988
    },
    {
        name: 'Kait',
        year: 1986
    },
    {
        name: 'Irv',
        year: 1970
    },
    {
        name: 'Lux',
        year: 2015
    }
];

const comments = [
    {
        text: 'Love this!',
        id: 523423
    },
    {
        text: 'Super good',
        id: 823423
    },
    {
        text: 'You are the best',
        id: 2039842
    },
    {
        text: 'Ramen is my fav food ever',
        id: 123523
    },
    {
        text: 'Nice Nice Nice!',
        id: 542328
    }
];

console.log("I am happy you opened console");
console.log("I am applying the some function and checking if there is at least one person having age more than 19");
var isAdult= people.some(person =>{
    var currYear= (new Date()).getFullYear();
    if(currYear - person.year >=19) {
        return true;
    }
});
console.log(isAdult);

console.log("Now I am using every function to check if everyone with age more than 19");
var allAdults= people.every(person =>{
    var currYear= (new Date()).getFullYear();
    if(currYear - person.year >=19) {
        return true;
    }
});

console.log(allAdults);

console.log("Now I am using find() to print the comment with id 823423")
var comment= comments.find(function (comment){
    if (comment.id === 823423) {
        return comment;
    }
});

console.log(comment);

console.log("Now I am using findIndex() to find the index of comment with id 823423 so that i can delete that comment ");
const index= comments.findIndex(function(comment) {
    if (comment.id === 823423 ) {
        return true;
    }
});

console.log(index);

console.log("Deletign the comment with id 823423 using the index that we have calculated");
console.table(comments);
const newComments= [
    ...comments.slice(0, index),
    ...comments.slice(index+1)
];
console.table(newComments);
