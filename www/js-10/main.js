const p= document.querySelector('p');
function makeGreen() {
    p.style.color= "#BADA55";
    p.style.fontSize= "50px";
}

//Regular
console.log("hello, I have used simple console.log");

//interpolated
console.log("hello I am %s Pandey: and this is an interpolated text", "Harshit");
var firstName = "Harshit";
var lastName = "Pandey";
console.log(`Same thing using  es6: ${firstName} ${lastName}`);
console.log("%c I am a designed text", "font-size:20px; background-color: lightblue;");

// warning
console.warn("I am a warning");

// error
console.error("I am an error");

//testing
console.assert( 2 === 1, "not equal");

//clear the console
// console.clear();

//dir
console.dir(p);

const dogs=
[
    {
        name : "Snikers",
        age: 8
    },
    {
        name: "hugo",
        age: 7
    }
];
console.table(dogs);
console.log("%c Implementing Groups", "font-size: 15px; background: lightgreen");
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`Name : ${dog.name}`);
    console.log(`Age : ${dog.age}`);
    console.groupEnd(`${dog.name}`);
});

//Counting
console.count("first");
console.count("first");
console.count("first");
console.count("Second");
console.count("Second");
console.count("Second");
console.count("first");
console.count("first");
console.count("Second");
console.count("Second");
console.count("first");


//timing
console.time("Fetching Data");
fetch('https://api.github.com/users/wesbos')
.then(data => data.json())
.then(data => {
    console.timeEnd("Fetching Data");
    console.log(data);
})
