function getCookie(name) {
  let cookies = document.cookie.split('; ');
  for (let cookie of cookies) {
      let [cookieName, cookieValue] = cookie.split('=');
      if (cookieName == name) {
          return cookieValue;
      }
  }
  return "english";
}
var namePormpt = "Your name: ";
var emailPrompt = "Your email: ";
var beenBooked = " has been booked!";
var fr = "Five rounds";
var tt = "Triple tee";
var rb = "Recreation break";

var body = document.getElementById('body');
var boxLeft = document.getElementById('boxLeft');
var boxMiddle = document.getElementById('boxMiddle');
var boxRight = document.getElementById('boxRight');
var buttonBox = document.getElementById('buttonBox');
var menuPage = document.getElementById('menuPage');
var menuContainerIn = document.getElementById('menuContainerIn');
var langlist = document.getElementById('langlist');

var menuFacilities = document.getElementById('menuFacilities');
var golfcourts = document.getElementById('golfcourts');
var clubs = document.getElementById('clubs');
var hotels = document.getElementById('hotels');
var rac = document.getElementById('rac');
var store = document.getElementById('store');
var otheractivities = document.getElementById('otheractivities');

var menuPackages = document.getElementById('menuPackages');
var fiverounds = document.getElementById('fiverounds');
var tripletee = document.getElementById('tripletee');
var recreationbreak = document.getElementById('recreationbreak');
var custompackages = document.getElementById('custompackages');

var menuContactus = document.getElementById('menuContactus');
var aboutus = document.getElementById('aboutus');
var why = document.getElementById('why');
var details = document.getElementById('details');

var headerTitle = document.getElementById('headerTitle');
var startTitle = document.getElementById('startTitle');
var startText = document.getElementById('startText');

var golfcourtsTitle = document.getElementById('golfcourtsTitle')
var golfcourtsText = document.getElementById('golfcourtsText')
var gymsTitle = document.getElementById('gymsTitle')
var gymsText = document.getElementById('gymsText')
var hotelsTitle = document.getElementById('hotelsTitle')
var hotelsText = document.getElementById('hotelsText')
var racTitle = document.getElementById('racTitle')
var racText = document.getElementById('racText')
var storeTitle = document.getElementById('storeTitle')
var storeText = document.getElementById('storeText')
var otherTitle = document.getElementById('otherTitle')
var otherText1 = document.getElementById('otherText1')
var otherText2 = document.getElementById('otherText2')
var otherText3 = document.getElementById('otherText3')
var book1 = document.getElementById('book1')
var book2 = document.getElementById('book2')
var book3 = document.getElementById('book3')

var footerTitle = document.getElementById('footerTitle');
var footerText = document.getElementById('footerText');
var goal = document.getElementById('goal');

if (getCookie("lang") == "english") {
  langEng()
}
else if (getCookie("lang") == "arabic") {
  langAr()
}
else if (getCookie("lang") == "port") {
  langPor()
}
else {
  langEng()
}

function langEng(){
  document.body.dir = "ltr";
  boxLeft.style.direction = "ltr";
  boxMiddle.style.direction = "ltr"
  boxRight.style.direction = "rtl";
  buttonBox.style.direction = "rtl";
  menuContainerIn.style.direction = "ltr";
  headerTitle.style.textAlign = "left";
  langlist.style.left = "100px";
  langlist.style.right = "0px";

  document.title = "Hole in 1 | Packages";

  menuFacilities.innerHTML = "Facilities";
  golfcourts.innerHTML = "Golf courts";
  clubs.innerHTML = "Clubs";
  hotels.innerHTML = "Hotels";
  rac.innerHTML = "Restaurants and cafes";
  store.innerHTML = "The store";
  otheractivities.innerHTML = "Other activities";

  menuPackages.innerHTML = "Packages";
  fiverounds.innerHTML = "Five rounds";
  tripletee.innerHTML = "Triple tee";
  recreationbreak.innerHTML = "Recreation break";
  custompackages.innerHTML = "Custom packages";

  menuContactus.innerHTML = "Contact us";
  aboutus.innerHTML = "About us";
  why.innerHTML = "Why choose us?";
  details.innerHTML = "Contact details";

  headerTitle.innerHTML = "Hole in 1 <br> Packages";
  startTitle.innerHTML = "Packages";
  startText.innerHTML = "Our packages and offers";

  golfcourtsTitle.innerHTML = "Five rounds"
  golfcourtsText.innerHTML = "~Full accommodation for five nights in a luxury suite. <br>~Five rounds 18 holes. <br>~One guided tour at the famous 'Sea view' golf course. <br>~Free digital training session."
  gymsTitle.innerHTML = "Triple tee"
  gymsText.innerHTML = "~Two-night stay in a double room with breakfast included. <br>~Three rounds 18 holes, including one guided tour at the famous 'Sea view' golf course (if available).<br>~Free gift for participants.<br>~20% discount at the shop."
  hotelsTitle.innerHTML = "Recreation break"
  hotelsText.innerHTML = "~One-night stay with a full breakfast.<br>~Dinner at any of the resorts restaurants.<br>~Access to the pools (fees apply, and the 'Sea view' golf course is excluded).<br>~Free club rental."
  otherTitle.innerHTML = "Custom packages"
  otherText1.innerHTML = "Custom packages are available for corporate events and extended stays."
  otherText2.innerHTML = "You have to contact us to arrange any custom packages."
  otherText3.innerHTML = "Click here to go to our contact details"
  book1.innerHTML = "Book"
  book2.innerHTML = "Book"
  book3.innerHTML = "Book"

  footerTitle.innerHTML = "Designed and programmed by:";
  footerText.innerHTML = "Ayham J.";
  goal.innerHTML = "This website was developed and built to meet the requirements for passing the 'Websites Development' chapter in 11th grade, I.T. major.";

  namePormpt = "Your name: ";
  emailPrompt = "Your email: ";
  beenBooked = " has been booked!";
  fr = "Five rounds";
  tt = "Triple tee";
  rb = "Recreation break";
}

function langAr(){
  document.body.dir = "rtl";
  boxLeft.style.direction = "rtl";
  boxMiddle.style.direction = "rtl"
  boxRight.style.direction = "ltr";
  buttonBox.style.direction = "ltr";
  menuContainerIn.style.direction = "rtl";
  headerTitle.style.textAlign = "right";
  langlist.style.left = "0px";
  langlist.style.right = "100px";

  document.title = "هول إن 1 | الحزم";

  menuFacilities.innerHTML = "المرافق";
  golfcourts.innerHTML = "ملاعب الجولف";
  clubs.innerHTML = "النوادي";
  hotels.innerHTML = "الفنادق";
  rac.innerHTML = "المطاعم والمقاهي";
  store.innerHTML = "المتجر";
  otheractivities.innerHTML = "الأنشطة الأخرى";

  menuPackages.innerHTML = "الحزم";
  fiverounds.innerHTML = "خمس جولات";
  tripletee.innerHTML = "الجولة الثلاثية";
  recreationbreak.innerHTML = "استراحى استجمام";
  custompackages.innerHTML = "الحزم المخصصة";

  menuContactus.innerHTML = "تواصل معنا";
  aboutus.innerHTML = "معلومات عننا";
  why.innerHTML = "لماذا يجب عليك اختيارنا؟";
  details.innerHTML = "بيانات التواصل";

  headerTitle.innerHTML = "هول إن 1 <br> الحزم";
  startTitle.innerHTML = "الحزم";
  startText.innerHTML = "حزمنا وعروضنا";

  golfcourtsTitle.innerHTML = "خمس جولات"
  golfcourtsText.innerHTML = "~إقامة كاملة لمدة خمس ليال في جناح فاخر. <br>~خمس جولات 18 حفرة. <br>~جولة إرشادية واحدة في ملعب الجولف الشهير 'سي فيو'. <br>~جلسة تدريبية رقمية مجانية."
  gymsTitle.innerHTML = "الجولة الثلاثية"
  gymsText.innerHTML = "~إقامة لمدة ليلتين في غرفة مزدوجة مع وجبة الإفطار. <br>~ثلاث جولات من 18 حفرة، بما في ذلك جولة إرشادية في ملعب الجولف الشهير 'سي فيو' (إن وجد).<br>~هدية مجانية للمشاركين.<br>~خصم 20% في المتجر."
  hotelsTitle.innerHTML = "إستراحة استجمام"
  hotelsText.innerHTML = "~إقامة لليلة واحدة مع وجبة إفطار كاملة.<br>~العشاء في أي من مطاعم المنتجع.<br>~الدخول إلى حمامات السباحة (تطبق الرسوم، ولا يشمل ملعب الجولف 'سي فيو').<br>~استئجار النادي مجانًا."
  otherTitle.innerHTML = "تتوفر الحزم المخصصة للفعاليات المؤسسية والإقامات الطويلة."
  otherText1.innerHTML = "الحزم المخصصة"
  otherText2.innerHTML = "يجب عليك التواصل معنا لترتيب أي حزم مخصصة."
  otherText3.innerHTML = "إضغط هنا للذهاب الى صفحة التواصل"
  book1.innerHTML = "إحجز"
  book2.innerHTML = "أحجز"
  book3.innerHTML = "أحجز"

  footerTitle.innerHTML = "تم التصميم والبرمجة بواسطة:";
  footerText.innerHTML = "أيهم ج.";
  goal.innerHTML = "تم تطوير وبناء هذا الموقع الالكتروني لتلبية المتطلبات للنجاح في وحدة 'تطوير المواقع الالكترونية' في الصف الحادي عشر (أول ثانوي)، تخصص تكنولوجيا المعلومات.";

  namePormpt = "أدخل اسمك: ";
  emailPrompt = "أدخل عنوان بريدك الالكتروني: ";
  beenBooked = " تم حجزها بنجاح!";
  fr = "خمس جولات";
  tt = "الجولة الثلاثية";
  rb = "إستراحة استجمام";
}
function langPor(){
  document.body.dir = "ltr";
  boxLeft.style.direction = "ltr";
  boxMiddle.style.direction = "ltr"
  boxRight.style.direction = "rtl";
  buttonBox.style.direction = "rtl";
  menuContainerIn.style.direction = "ltr";
  headerTitle.style.textAlign = "left";
  langlist.style.left = "100px";
  langlist.style.right = "0px";

  document.title = "Buraco em 1 | Pacotes";

  menuFacilities.innerHTML = "Instalações";
  golfcourts.innerHTML = "Campos de golfe";
  clubs.innerHTML = "Clubes";
  hotels.innerHTML = "Hotéis";
  rac.innerHTML = "Restaurantes e cafés";
  store.innerHTML = "A loja";
  otheractivities.innerHTML = "Outras atividades";

  menuPackages.innerHTML = "Pacotes";
  fiverounds.innerHTML = "Cinco rodadas";
  tripletee.innerHTML = "Camiseta tripla";
  recreationbreak.innerHTML = "Pausa recreativa";
  custompackages.innerHTML = "Pacotes personalizados";

  menuContactus.innerHTML = "Contate-nos";
  aboutus.innerHTML = "Sobre nós";
  why.innerHTML = "Por que nos escolher?";
  details.innerHTML = "Detalhes de contato";

  headerTitle.innerHTML = "Buraco em 1 <br> Pacotes";
  startTitle.innerHTML = "Pacotes";
  startText.innerHTML = "Nossos pacotes e ofertas";

  golfcourtsTitle.innerHTML = "Cinco rodadas"
  golfcourtsText.innerHTML = "~Acomodação completa por cinco noites em suíte luxo. <br>~Cinco rodadas de 18 buracos. <br>~Uma visita guiada ao famoso campo de golfe 'Vista para o mar'. <br>~Sessão de treinamento digital gratuita."
  gymsTitle.innerHTML = "Camiseta tripla"
  gymsText.innerHTML = "~Duas noites de alojamento em quarto duplo com pequeno almoço incluído. <br>~Três voltas de 18 buracos, incluindo uma visita guiada ao famoso campo de golfe 'Vista para o mar' (se disponível).<br>~Presente gratuito para os participantes.<br>~20% de desconto na loja."
  hotelsTitle.innerHTML = "Pausa recreativa"
  hotelsText.innerHTML = "~Estadia de uma noite com pequeno-almoço completo.<br>~Jantar em qualquer um dos restaurantes do resort.<br>~Acesso às piscinas (taxa extra e o campo de golfe 'Vista Mar' está excluído).<br>~Aluguer gratuito do clube."
  otherTitle.innerHTML = "Pacotes personalizados"
  otherText1.innerHTML = "Pacotes personalizados estão disponíveis para eventos corporativos e estadias prolongadas."
  otherText2.innerHTML = "Você deve entrar em contato conosco para organizar quaisquer pacotes personalizados."
  otherText3.innerHTML = "Clique aqui para acessar nossos dados de contato"
  book1.innerHTML = "Reserve"
  book2.innerHTML = "Reserve"
  book3.innerHTML = "Reserve"

  footerTitle.innerHTML = "Projetado e programado por:";
  footerText.innerHTML = "Ayham J.";
  goal.innerHTML = "Este site foi desenvolvido e construído para atender aos requisitos para aprovação no capítulo 'Desenvolvimento de Sites' no 11º ano, I.T. principal.";

  namePormpt = "Seu nome: ";
  emailPrompt = "Seu e-mail: ";
  beenBooked = " foi reservado!";
  fr = "Cinco rodadas";
  tt = "Camiseta tripla";
  rb = "Pausa recreativa";
}

function book(target) {
  var name = prompt(namePormpt, "");
  var name = prompt(emailPrompt, "");

  if (target == "Five rounds") {
    alert(fr + beenBooked);
  }
  else if (target == "Triple tee") {
    alert(tt + beenBooked);
  }
  else if (target == "Recreation break") {
    alert(rb + beenBooked);
  }
  else{}
}