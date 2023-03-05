// ********** let ve const ile Degisken Tanimlama **********

// var ile degisken tanimlamak:
var serverName = "dersimizturkce";
console.log(serverName);

// let ile degiskeni bos tanimlamak:
let serverName;
console.log(serverName);

// let ile degiskene bilgi atamak:
serverName = "youtube-nasilcizerim";
console.log(serverName);

// let ile degiskene bilgi atayarak tanimlamak:
let password = "1234";
console.log(password);

// degisken atamasi yapmadan once kullanmaya calismak:

/* HATALI KULLANIM:  
console.log(fullName)
let fullName = "Erdem GÖÇEN";
*/
let fullName = "Erdem GOCEN";
console.log(fullName);

// let ile tanimlanan degiskenin icindeki bilgiyi degistirmek:

fullName = "Lorem Ipsum ";
console.log(fullName);

// birlestirme veya ekleme islemi
fullName + "Yeni Eklenen Bilgi"; // acaba eklendimi ??
console.log(fullName + " Test Bilgisi"); // Ekle ve Goster ama Degiskene Eklemedik

fullName = fullName + " Yeni Bilgi";
fullName = "2: Bilgi : " + fullName;

fullName = "Sifirlandi";
fullName += " ve Yeni Bilgi Eklendi";
console.log(fullName);

// const ile degiskeni bos tanimlamaya calismak :( :
// const serverPassword; // sadece degisken tanimlandi ama ici bos ??

// const ile degisken tanimlamak:
const SERVER_PASSWORD = "oisjefo9jwes221";
console.log(SERVER_PASSWORD);

// SERVER_PASSWORD = "1234"
// console.log(SERVER_PASSWORD)
