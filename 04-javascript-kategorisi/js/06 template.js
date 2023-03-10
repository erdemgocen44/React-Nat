let userName = "ErdemGOCEN";
const DOMAIN = "DersimizTürkçe";

let email = userName + "@" + DOMAIN;
console.log(
  "Merhaba ",
  userName + "sitemize hoş geldin, " + "mail adresin: " + email
);

let info = `Merhaba ${userName} sitemize hoşgeldin. mail adresin ise: ${email}
mail adresinin uzunluğu ${email.length}
`;
console.log(info);
