// function lan_greeting(lang) {
//     let languages = {
//     english: "Welcome",
//     czech: "Vitejte",
//     danish: "Velkomst",
//     dutch: "Welkom",
//     estonian: "Tere tulemast",
//     finnish: "Tervetuloa",
//     flemish: "Welgekomen",
//     french: "Bienvenue",
//     german: "Willkommen",
//     irish: "Failte",
//     italian: "Benvenuto",
//     latvian: "Gaidits",
//     lithuanian: "Laukiamas",
//     polish: "Witamy",
//     spanish: "Bienvenido",
//     swedish: "Valkommen",
//     welsh: "Croeso",
//     };
    
//     if (languages.hasOwnProperty(lang)) {
//         return languages[lang];
//     }
//     else {
//         return languages['english']
//     }
// }
// console.log(lan_greeting("swedish"));




// setTimeout(() => {
//   console.log("Web API");
// }, 999);

// function one() {
//   console.log("One");
// }
// function two() {
//   one();
//   console.log("Two");
// }
// function three() {
//   two();
//   console.log("Three");
// }

// three();
// console.log("One");
// setTimeout(() => {
//   console.log("Three");
// }, 444);
// setTimeout(() => {
//   console.log("Four");
// }, 0);
// console.log("Two");

let myRequest = new XMLHttpRequest();
myRequest.open('Get', 'https://api.github.com/users/elzerowebschool/repos');
myRequest.send();
console.log(myRequest);
myRequest.onreadystatechange=function()