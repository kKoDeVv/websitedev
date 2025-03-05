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
var otherText4 = document.getElementById('otherText4')

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
  changeDir("left");

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
  golfcourtsText.innerHTML = ""
  gymsTitle.innerHTML = "Triple tee"
  gymsText.innerHTML = "We have 2 gyms with the newest and most recent equipments and machines"
  hotelsTitle.innerHTML = "Recreation break"
  hotelsText.innerHTML = "We offer you rooms in some of the best hotels in Portugal"
  otherTitle.innerHTML = "Custom packages"
  otherText1.innerHTML = "1-A training ground illuminated by scout lights."
  otherText2.innerHTML = "2-Golf lessons."
  otherText3.innerHTML = "3-Digital training."
  otherText4.innerHTML = "4-Assistance service for carrying golf equipment."

  footerTitle.innerHTML = "Designed and programmed by:";
  footerText.innerHTML = "Ayham J.";
  goal.innerHTML = "This website was developed and built to meet the requirements for passing the 'Websites Development' chapter in 11th grade, I.T. major.";
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
  changeDir("right");

  document.title = "هول إن 1 | المرافق";

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

  headerTitle.innerHTML = "هول إن 1 <br> المرافق";
  startTitle.innerHTML = "المرافق";
  startText.innerHTML = "الأماكن والفعاليات في منتجعنا";

  golfcourtsTitle.innerHTML = "ملاعب الجولف"
  golfcourtsText.innerHTML = "لدينا 3 ملاعب لبطولات الجولف، بما في ذلك ملعب 'سي فيو' الشهير!"
  gymsTitle.innerHTML = "النوادي"
  gymsText.innerHTML = "لدينا ناديين مع أجدد وأحدث المعدات والالات"
  hotelsTitle.innerHTML = "الفنادق"
  hotelsText.innerHTML = "نقدم لك غرف في بعض من أفضل الفنادق في البرتغال"
  racTitle.innerHTML = "المطاعم والمقاهي"
  racText.innerHTML = "استمتع بطعام ومشروبات لذيذة في أفضل مطاعمنا ومقاهينا"
  storeTitle.innerHTML = "المتجر"
  storeText.innerHTML = "هل تبحث على مكان لشراء معدات الجولف؟ انه هنا"
  otherTitle.innerHTML = "النشاطات الأخرى"
  otherText1.innerHTML = "1-ساحة تدريب مضاءة بالأنوار الكشافة."
  otherText2.innerHTML = "2-دروس الجولف."
  otherText3.innerHTML = "3-التدريب الرقمي."
  otherText4.innerHTML = "4-خدمة المساعدة على حمل أدوات الجولف."

  footerTitle.innerHTML = "تم التصميم والبرمجة بواسطة:";
  footerText.innerHTML = "أيهم ج.";
  goal.innerHTML = "تم تطوير وبناء هذا الموقع الالكتروني لتلبية المتطلبات للنجاح في وحدة 'تطوير المواقع الالكترونية' في الصف الحادي عشر (أول ثانوي)، تخصص تكنولوجيا المعلومات.";
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
  changeDir("left");

  document.title = "Buraco em 1 | Instalações";

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

  headerTitle.innerHTML = "Buraco em 1 <br> Instalações";
  startTitle.innerHTML = "Instalações";
  startText.innerHTML = "Os locais e atividades do nosso resort";

  golfcourtsTitle.innerHTML = "Campos de golfe"
  golfcourtsText.innerHTML = "Dispomos de 3 campos para competições de golfe, Incluindo o muito conhecido campo de golfe 'Vista Mar'!"
  gymsTitle.innerHTML = "Ginásios"
  gymsText.innerHTML = "Dispomos de 2 ginásios com os mais recentes e modernos equipamentos e máquinas"
  hotelsTitle.innerHTML = "Hotéis"
  hotelsText.innerHTML = "Oferecemos-lhe quartos em alguns dos melhores hotéis de Portugal"
  racTitle.innerHTML = "Restaurantes e cafés"
  racText.innerHTML = "Desfrute de comidas e bebidas deliciosas em nossos restaurantes e cafés de primeira linha"
  storeTitle.innerHTML = "Loja"
  storeText.innerHTML = "Procurando um lugar para comprar equipamentos de golfe? aqui está"
  otherTitle.innerHTML = "Outras atividades"
  otherText1.innerHTML = "1-Um campo de treinamento iluminado por luzes de escoteiros."
  otherText2.innerHTML = "2-Aulas de golfe."
  otherText3.innerHTML = "3-Treinamento digital."
  otherText4.innerHTML = "4-Serviço de assistência no transporte de equipamento de golfe."

  footerTitle.innerHTML = "Projetado e programado por:";
  footerText.innerHTML = "Ayham J.";
  goal.innerHTML = "Este site foi desenvolvido e construído para atender aos requisitos para aprovação no capítulo 'Desenvolvimento de Sites' no 11º ano, I.T. principal.";
}

function changeDir(ddir) {
  document.querySelectorAll(".pagebio").forEach(element => {
      element.style.textAlign = ddir;
  });
}