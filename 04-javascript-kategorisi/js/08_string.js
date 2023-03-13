let email = "erdemgocen44@gmail.com";
let firstName = "Erdem";
let lastName = "GÖÇEN";

console.log(email.length);

console.log(firstName[0]);

console.log(firstName.charAt(1));

firstName = firstName.toUpperCase();

console.log(firstName);

firstName = firstName.toLowerCase();

console.log(firstName);

console.log(email.search("@"));

console.log(email[12]);

let DOMAIN = email.slice(12);

console.log(DOMAIN);

console.log(DOMAIN.slice(0, DOMAIN.indexOf(".")));

let fullName = `${firstName[0].toUpperCase()}${firstName
  .slice(1)
  .toLowerCase()} ${lastName[0].toUpperCase()}${lastName
  .slice(1)
  .toLowerCase()}`;

console.log(fullName);

//SORU

let url = "www.dersimizturkce.org";
let language = "Java";

language = language.replace("Java", "JAVASCRIPT");

console.log(language);

console.log(url.indexOf("."));

let DOMAIN2 = "";

DOMAIN2 = url.slice(3 + 1);

console.log(DOMAIN2);
