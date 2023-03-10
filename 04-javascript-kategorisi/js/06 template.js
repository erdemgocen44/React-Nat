let userName = "ErdemGOCEN";
const DOMAIN = "DersimizTürkçe";

let email = userName + "@" + DOMAIN;
console.log(
  "Merhaba ",
  userName + "sitemize hoş geldin, " + "mail adresin: " + email
);

let info = `Merhaba ${userName} 
sitemize hoşgeldin. 
mail adresin ise: ${email}
mail adresinin uzunluğu ${email.length}
borcunuz: ${(2 + 3) * 12} TL 
gunun saat bilgisi : ${new Date().getHours()}
kısa isminiz ${userName[0]}.
`;
console.log(info);
