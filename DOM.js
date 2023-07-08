/* HTML taglari */
// DOM ga ko'ra, har bir html taglari bu obyekt sifatida gavdalanadi
// agar biror tagimiz ichma ich joylashsa u o'zini o'rab turgan tagning bolasiga aylanadi

// document eshigi => body eshigi => style eshigi => background eshigi
document.body.style.background = 'yellow'

/*
<!DOCTYPE HTML>
<html>
<head>
  <title>About elk</title>
</head>
<body>
  The truth about elk.
</body>
</html>
*/

// deylik bizda yuqorigi ko'rinish bor, bunda html tagi bizning document eshigimiz, body tagi esa body eshigimiz va u html tagi ichida joylashgan

/* bo'sh joy va yangi qator ham DOM ning asosiy xusuiyatlaridan biridir va ular ham valid character sifatida ko'riladi xuddi raqam va harflar kabi */
// Ular head tagidan oldin qo'yilsa o'qilmaydi
// Body tagidan keyin qo'yilsa avtomatik ravishda bodyni ichiga kiritilib yuboriladi


/* Avtomatik ravishda xatolarni to'g'irlanishi */
// Deylik bizning html dokumentimizda bir nechta xatoliklar mavjud va buni browser avtomatik ravishda to'g'irlaydi 

// 1. Har doim eng yuqori tag sifatida <html> tagi ko'riladi, hatto u tashlab ketilgan holda ham u DOM da mavjud bo'ladi

// 2. Xuddi shu narsa <body> tagiga ham tegishli
// Deylik bizda Salom so'zi mavjud, browser buni avtomatik ravishda html va body taglari ichiga o'rab ketadi

// 3. DOM avtomatik ravishda ochiq taglarni davomi qoldirilgan bo'lsa yopib ketadi, ya'ni quyidagidek
/*
<p>Hello
<li>Mom
*/
  // bazi taglarimizda yopiq tagi bo'lmagani uchun ular normal tag sifatida qabul qilinadi Maslan <br>, 
  // Maxsus holat tablellarda sal boshqacharoq
    // <tbody> tagi umuman table yaratilganda yozilmasa ham browser uni avtomatik ravishda DOMda yaratib ketadi

// 4. Text node - matnlar uchun ham alohida node mavjud 

// 5. html ichida comment yozib ketsak ham u ham alohida node sifatida ko'riladi 


/* Xulosa */
// HTML/XML documenti DOMning shoxlari sifatida browserda namoyon bo'ladi

// Har bir tag alohida bir shox(node) bo'lib ularning eng katta otasi <html>
// text node - matnlar uchun
// html dagi har bir narsa uchun alohida node mavjud




// =========================== * =========================

/* DOM bo'yicha aylanib chiqish */

/* === document = <html> === asosiy kirish eshigi */
/* === document.body = <body> === body tagiga kirish */
/* === document.head = <head> === head tagiga kirish */

// Farzand node(shox)lar 

/*
<html>
<body>

  <div>Begin</div>

  <ul>
    <li>
      <b>Information</b>
    </li>
  </ul>

</body>
</html>
*/
/* Deylik yuqorida biz ko'rib turgan <html> tagi asosiy ona shox bo'lib uning <body> degan farzandi bor, <body>ning esa ikkta farzandi bor, ular <div>, <ul> va bo'sh joylar */
// <ul> ning <li> degan farzandi bor, <li>ning esa <b> degan farzandi bor.




/* === childNodes === barcha farzand nodelarni yig'ib beradi */

// Quyida biz har bir child node bo'yicha aylanib chiqiyapmiz va uning nomini alert sifatida xabarda ko'riyapmiz

/*
<html>
<body>
  <div>Begin</div>

  <ul>
    <li>Information</li>
  </ul>

  <div>End</div>

  <script>
    for (let i = 0; i < document.body.childNodes.length; i++) {
      alert( document.body.childNodes[i] ); // Text, DIV, Text, UL, ..., SCRIPT
    }
  </script>
  ...more stuff...
</body>
</html>
*/

// ammo ushbu codedda script tagidan keyin kelgan node ko'rinmaydi, chunki u faqat o'zidan oldingi qatorlarni o'qiydi

/* === firstChild va lastChild, bizga birinchi va oxirgi farzand shoxlarga kirishni ta'minlab beradi */


elem.childNodes[0] === elem.firstChild
elem.childNodes[elem.childNodes.length - 1] === elem.lastChild



/* === hasChildNodes() === funksiyasi, bizda farzand nodelar borligini tekshirib beradi */
elem.hasChildNodes()

// Yuqoridagi namunalardan ko'rishimiz mumkinki, childNode lar, array ga o'xshash strukturadan tashkil topgan, ammo u array emas, balki linked list degan data type - ya'ni elementlar xuddi arraydek xohlagan indexdan olinavermaydi, balki avval parent so'ng child ketma ketligida amalga oshiriladi

/* for ... of, loop orqali biz child nodelarni aylanib chiqishimiz mumkin */
for (let node of document.body.childNodes) {
  alert(node); // shows all nodes from the collection
}

/* Array from methodi orqali biz child nodeni arrayga o'tqazib olamiz */
alert( Array.from(document.body.childNodes).filter )


// Farzandlar va Onalar