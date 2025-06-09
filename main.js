/* console.log("My name is Fakhri"); */

/* let name = "Fakhri";
console.log(name) */

/* Bu adlardan hansının dəyişən üçün istifadə oluna biləcəyini göstərin. Birdən çox variant seçin.

2user
c@rt
person  ==== bu
title color
console
$add  ----bu */

/* let bookprice = 10;
let bookamount = 5;
let totalprice = bookprice * bookamount;
console.log( totalprice); */

/* 
let kmhSpeed = 90;
let msSpeed = kmhSpeed * (1000 / 3600);
console.log( msSpeed);
*/

//İstifadəçinin doğum tarixini soruşan və bu günə qədər yaşadığı günlərin sayını göstərən proqram yazın.

/* 
let birthDate = prompt("Doğum tarixini daxil edin ");
let year = 2025-birthDate;
let today = birthDate * 365;
console.log(today)
*/

// Ədədlər üzərində əməliyyatları yerinə yetirin. num dəyişənində iki rəqəmli ədəd saxlanılır. Belə proqram yazın:

// Bu ədədin beşinci dərəcə qüvvətə qaldırılmış vəziyyətini.
// 3-ə bölünmədən qalan bu ədədin qalığını.


// let num = 25;
// let quvvet = num ** 5;
// console.log(quvvet);


/* 
let firstName ="Fakhri";
let lastName = "Huseynov";
let fullName = "Sizin adiniz" + " " +  firstName + " " + lastName;
console.log(fullName);
*/

/* 
let fullName = "Fakhri Huseynov";
console.log(fullName.length);
*/
 
/* 
let adSoyad = prompt("Adınızı və soyadınızı daxil edin");
let adSoyadArray = adSoyad.split(" ");
let ad = adSoyadArray[0];
let soyad = adSoyadArray[1];
let fullName = ad[0]+ " " + soyad[1];
console.log(fullName);
*/


/* 
let user = prompt("Adınızı və Soyadınızı  daxil edin");
let userArray = user.split(" ");
let ad = userArray[0];
let soyad = userArray[1];
console.log(`${soyad[0]} ${ad[0]}`);

*/


/*let ad = prompt("Adınızı daxil edin");
console.log("salam " + ad);*/

/* 
let eded = prompt("İstədiyiniz ədəd daxil edin");
let eded1= prompt("İstədiyiniz ikinci ədəd daxil edin");

let a =+(eded);
let b =+(eded1);

console.log(a + b);
console.log(a - b);     
console.log(a * b);
console.log(a / b);
*/


/* 
let hasil = 12345 * 98765;
let hasilStr = hasil.toString();
let altinciReqem = hasilStr[5];
console.log(altinciReqem);

*/
/* 
"" + 1 + 0 =10
"" - 1 + 0 =-1
"true" - false =NaN
6 / "3" =2
4 + 5 + "px" =9px
"$" + 4 + 5 =$45
"4" - 2 =2
NaN + "px" =Nanpx
7 / 0 =infiniti
"-9" + 5 =-95
"-9" - 5 =-14
null + 1 =1
undefined + 1 =NaN
*/
/* 
let eded = prompt("4 reqemli eded daxil edin");
let cem = +(eded[0]) + +(eded[1]) + +(eded[2]) + +(eded[3]);
console.log(cem);
*/

/*let userName = prompt("Zehmet Olmazsa adinizi soyadinizi daxil edin");
console.log(`«Salam, ${userName}, xos geldiniz!»`);*/

/*let Qiymet = prompt("Qiymeti  bu «530.90» formatda daxil edin");
let yekun = Qiymet.split("."); 
let manat = yekun[0];
let qepik = yekun[1];
console.log(`Qiymet: ${manat} manat ${qepik} qepikdir.`);*/

/* 
let emekHaqqi = prompt("Emek haqqinizi daxil edin");
let vergi = emekHaqqi * 0.13;
let netEmekHaqqi = emekHaqqi - vergi;
console.log(`Vergi: ${vergi} manat, Net emek haqqi: ${netEmekHaqqi} manat`);
*/


/* 
let fullName = prompt("Tam adınızı daxil edin (Soyad Ad Ata adı):");
let hisseler = fullName.trim().split(" ");
let soyad = hisseler[0];
let ad = hisseler[1];
let ataAdi = hisseler[2];
let netice = soyad + " " + ad[0].toUpperCase() + "." + ataAdi[0].toUpperCase() + ".";
console.log(netice);
*/

/* 
let Mebleg = prompt("Mebleg daxil edin");
let faiz = prompt("Faiz daxil edin");
let il = prompt("Il daxil edin");
let netice = Mebleg * faiz * il/100;
console.log(netice)

*/


/* let a =20
let b = 10;
console.log(a>b)
console.log(a>b)
console.log(a>=b)   
console.log(a<=b)
console.log(a==b) */

/* 
let yas = prompt("Yasinizi daxil edin");
yas = +(yas);
 if (yas<18) 
    {
        alert("Access denied");
    }
    else
    {
        alert("Access granted");
    }
    console.log(yas);
*/

/* let ededler = prompt("3 iki reqemli Eded daxil edin (məsələn: 15,25,35,)")
let daxilEdilenler = ededler.split(" ");
let a = +(daxilEdilenler[0]);
let b = +(daxilEdilenler[1]);
let c = +(daxilEdilenler[2]);

if (a==b|| b==c || a==c) {
    console.log("Daxil edilən ədədlərdən ən azı ikisi bərabərdir.");
} */
//Üç ədədin ortancılını tapmaq üçün proqram yazın. İstifadəçidən bir bildirişlə üç ikirəqəmli ədəd daxil etməsini xahiş edin. Konsola orta ədədi, yəni nə ən böyüyü, nə də ən kiçiyini çıxarmayın. İstifadəçi bir neçə eyni nömrə daxil edibsə, xəta bildirişi çıxarın.

Məsələn:

"45 46 47"
"47 46 45"
"46 45 47"
"46 47 45"
    //task 25 ede bilmedim//


//İstifadəçidən bir il daxil etməsini soruşun və ilin uzun il olub olmadığını yoxlayın.
//Uzun il 4-ə qalıqsız bölünən ildir.
//Daxil edilmiş il uzun ildirsə, konsola mesaj cıxarın.
//«İl uzun il deyil» və ya «İl uzun ildir» mesajını çıxarın.

/* 
let il = prompt("Bir il daxil edin");
il = +(il); 
if (il % 4 === 0) {
    console.log("İl uzun ildir");
}else {
    console.log("İl uzun il deyil");
} 

*/

/* 
let id = prompt("enter product id:");
if (id === "1") {
  alert("Available 10 pcs.");
} else if (id === "2") {
  alert("Available 256 pcs.");
} else if (id === "3") {
  alert("Available 53 pcs.");
} else if (id === "4") {
  alert("There are 3 available.");
} else {
  alert("Out of stock");
}
*/
/* 
let id = prompt("enter product id:");
switch (id) {
  case "1":
    alert("Available 10 pcs.");
    break;
  case "2":
    alert("Available 256 pcs.");
    break;
  case "3":
    alert("Available 53 pcs.");
    break;
  case "4":
    alert("There are 3 available.");
    break;
  default:
    alert("Out of stock");

    console.log("Out of stock");
}
*/

/* 
let gender = prompt("Cinsinizi daxil edin (M/F):");
let cins;
if(gender === "M"|| gender === "m") {
    cins = "Cənab";
    console.log("Salam, cənab!");
} else if(gender === "F"|| gender === "f") {
    cins = "Xanım";
    console.log("Salam, xanım!");
}
else {
    cins = "Xəta: Yalnız M və ya F daxil edin!";
    
}
console.log(cins);
*/


/* 

let ay= prompt("Ayın nomresini daxil edin (1-12):");

switch (ay) {
    case "1":
        console.log("Yanvar - 31 gün");
        break;
        case "2":
        console.log("Fevral - 28 gün (Artıq il isə 29 gün)");
        break;
    case "3":
        console.log("Mart - 31 gün");
        break;      
    case "4":
        console.log("Aprel - 30 gün");
        break;
    case "5":
        console.log("May - 31 gün");
        break;
    case "6":       
        console.log("İyun - 30 gün");
        break;
    case "7":   

        console.log("İyul - 31 gün");
        break;
    case "8":   
        console.log("Avqust - 31 gün");
        break;
    case "9":       
        console.log("Sentyabr - 30 gün");
        break;  
    case "10":
        console.log("Oktyabr - 31 gün");
        break;
    case "11":  
        console.log("Noyabr - 30 gün");
        break;
    case "12":  

        console.log("Dekabr - 31 gün");
        break;
    default:
        console.log("Xəta: 1-dən 12-yə qədər bir ay nömrəsi daxil edin.");
        break;

}
 */
//task 30 ede bilmedim
//let date= prompt("Tarixi daxil edin il/ay/gün/ formatında):");
//let aylar = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"];


/* 
let p = 8;
let q = p-- - --p + p++ + ++p;
console.log(p, q);

*/


/* let a = 6, b = 4, c = 2;

let x = ++a - b-- + c++ - --b + a++;
let y = a-- + --c - ++b + x++ - --a;

console.log(a, b, c, x, y);*/

/*let a = 7, b = 3, c = 5;

let x = a-- - ++b + c++ - --a + b++ - --c + a++ - b-- + c++;
let y = --x + a++ - --b + c-- - x++ + ++a - b++ + --c - x--;
let z = a-- + ++b - --c + x++ - --y + b-- - ++x + c++ - --a + y++;

console.log(a, b, c, x, y, z);*/

/* 
let eded= +prompt("zehmet olmazsa bir eded daxil edin:");

if  (eded>0) {
    console.log("Eded musbetdir");
}else if (eded<0) {
    console.log("Eded menfidir");
}
else {
    console.log("Eded 0-dir");
}

*/

/*let a = 5;
let b = 8; 
let c = 3;
let enBoyuk;

if (a >= b && a >= c) {
  enBoyuk = a;
} else if (b >= a && b >= c) {
  enBoyuk = b;
} else {
  enBoyuk = c;
}

console.log("Ən böyük ədəd:", enBoyuk);*/

//Verilmiş ədədin cüt və ya tək olduğunu ternary operatoru ilə müəyyən edin. 36 ci task bilmedim



/* 
let a = Number(prompt("Kvadratın bir tərəfini daxil edin:"));
let sahe = a * a;
let perimetr = 4 * a;
console.log("Kvadratın sahəsi: " + sahe);
console.log("Kvadratın perimetri: " + perimetr);
*/


/* let qiymet = +(prompt("Qiyməti daxil edin (0–100):"));

switch (true) {
  case (qiymet >= 90 && qiymet <= 100):
    console.log("Əla");
    break;
  case (qiymet >= 75 && qiymet <= 89):
    console.log("Yaxşı");
    break;
  case (qiymet >= 60 && qiymet <= 74):
    console.log("Orta");
    break;
  case (qiymet >= 0 && qiymet <= 59):
    console.log("Zəif");
    break;
  default:
    console.log("Yanlış qiymət daxil edilib");
}
     */

/* 
let eded = Math.floor(Math.random() * 101);  
console.log("Təsadüfi ədəd:", eded);

if (eded >= 0 && eded <= 50) {
  console.log("Ədəd 0 ilə 50 arasındadır.");
} else {
  console.log("Ədəd 0 ilə 50 arasında deyil.");
}
*/

/* 
let a = 5, b = 3, op = "*";
let netice;

switch (op) {
  case "+":
    netice = a + b;
    break;
  case "-":
    netice = a - b;
    break;
  case "*":
    netice = a * b;
    break;
  case "/":
    if (b !== 0) {
      netice = a / b;
    } else {
      netice = "Xəta: 0-a bölmək olmaz!";
    }
    break;
  default:
    netice = "Düzgün operator daxil edilməyib.";
}

console.log("Nəticə:", netice);

*/







   



  

























