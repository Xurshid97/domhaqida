/* === Web browser === javascriptning kodlari uchun dastlabki host environment */

// Host environment - bu javascript kodlarini ishlashini ta'minlovchi muhit hissoblanadi

//  Deylik bizda === window === browser oynasi [eng boshlang'ich ildiz] mavjud va u bir nechta tarmoqlarga bo'linib ketgan 

    // 1. DOM  - Document Object Model  - bizning oynamizdagi mavjud narsalar[content], ya'ni biz ularni doimiy o'zgartirib turamiz. 

    // 2. BOM - Browser Object Model - bizga JavaScript va DOM o'rtasida ko'prik vazifasini o'taydi

    // 3. JavaScript - Browser uchun yaratilgan til


/* window o'zi nima? */ 
// ma'nosi oyna, bu asosiy ildiz bo'lib to'g'ridan-to'g'ri biz ko'rayotgan oynani ifodalaydi va js uchun global obyekt sifatida ishlaydi

window.alert('Hey oshna') // Hey oshna

console.log(window.innerHeight) // sizning ekraningiz o'lchami chiqadi

/* DOM ga kirish */ 
// Sahifamizdagi mavjud o'zgartirib bo'ladigan contentlar 

// document so'zi asosiy kirish eshigi hissoblanadi - deylik bizda bitta uy bor va u uyning bitta asosiy darvozasi va har biri ketma ket ulangan xonalari mavjud, biz bir eshigni ochib so'ng keyingisiga boramiz


// document eshigi => body eshigi => style eshigi => background eshigi
document.body.style.background = "red"; // sahifamiz orqa foni qizil rangga kirib qoldi


/* BOM ga kirish */
// BOM ning asosiy obyektlaridan biri bu biz yuqorida ko'rgan window hisoblanadi


window.document.getElementById("header") 
/* va */ 
document.getElementById("header");
// bir xil ma'noni anglatadi

// shuningdek screen, location, history, navigator, popup, alert, timing va boshqa bir qancha narsalarni o'ziga qamrab oladi

// navigator - browser va operatsion tizim haqida ma'lumot olish uchun ishlatiladi

navigator.userAgent // 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N)' --- browser nomi
navigator.platform // 'Win32' --- operatsion tizim nomi



