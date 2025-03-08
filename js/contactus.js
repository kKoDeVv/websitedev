var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var messageInput = document.getElementById('message');

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

var footerTitle = document.getElementById('footerTitle');
var footerText = document.getElementById('footerText');
var goal = document.getElementById('goal');


var aboutusTitle = document.getElementById('aboutusTitle');
var aboutusText = document.getElementById('aboutusText');
var whyTitle = document.getElementById('whyTitle');
var whyText = document.getElementById('whyText');
var detailsTitle = document.getElementById('detailsTitle');
var numberTitle = document.getElementById('numberTitle');
var emailTitle = document.getElementById('emailTitle');
var facebookTitle = document.getElementById('facebookTitle');
var orr = document.getElementById('orr');
var sendTitle = document.getElementById('sendTitle');
var nameTitle = document.getElementById('nameTitle');
var yourEmail = document.getElementById('yourEmail');
var messageTitle = document.getElementById('messageTitle');
var sendButton = document.getElementById('sendButton');

var sentMessage = "Message has been sent, thank you for contacting us!";

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

  document.title = "Hole in 1 | Contact us";

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

  headerTitle.innerHTML = "Hole in 1 <br> Contact us";
  startTitle.innerHTML = "Contact us";
  startText.innerHTML = "More details and information about us";

  footerTitle.innerHTML = "Designed and programmed by:";
  footerText.innerHTML = "Ayham J.";
  goal.innerHTML = "This website was developed and built to meet the requirements for passing the 'Websites Development' chapter in 11th grade, I.T. major.";

  aboutusTitle.innerHTML = "About us";
  aboutusText.innerHTML = "We are a golf resort facility located in Portugal";
  whyTitle.innerHTML = "Why choose us?";
  whyText.innerHTML = "We offer high quality facilities, Services, And activities, For decently low prices";
  detailsTitle.innerHTML = "Our contact details";
  numberTitle.innerHTML = "Phone number:";
  emailTitle.innerHTML = "Email:";
  facebookTitle.innerHTML = "Facebook:" ;
  orr.innerHTML = "OR";
  sendTitle.innerHTML = "Contact us directly";
  nameTitle.innerHTML = "First and last name:";
  yourEmail.innerHTML = "Your Email:";
  messageTitle.innerHTML = "Message:";
  sendButton.innerHTML = "Send";

  sentMessage = "Message has been sent, thank you for contacting us!";
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

  document.title = "هول إن 1 | تواصل معنا";

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

  headerTitle.innerHTML = "هول إن 1 <br> تواصل معنا";
  startTitle.innerHTML = "تواصل معنا";
  startText.innerHTML = "المزيد من التفاصيل والمعلومات عننا";

  footerTitle.innerHTML = "تم التصميم والبرمجة بواسطة:";
  footerText.innerHTML = "أيهم ج.";
  goal.innerHTML = "تم تطوير وبناء هذا الموقع الالكتروني لتلبية المتطلبات للنجاح في وحدة 'تطوير المواقع الالكترونية' في الصف الحادي عشر (أول ثانوي)، تخصص تكنولوجيا المعلومات.";

  aboutusTitle.innerHTML = "المزيد عننا";
  aboutusText.innerHTML = "نحن شركة منتجع جولف موجودة في البرتغال";
  whyTitle.innerHTML = "لماذا يجب عليك اختيارنا؟";
  whyText.innerHTML = "نحن نقدم مرافق، خدمات، وفعاليات عالية الجودة بسعر زهيد";
  detailsTitle.innerHTML = "معلومات الاتصال بنا";
  numberTitle.innerHTML = "رقم الهاتف:";
  emailTitle.innerHTML = "البريد الالكتروني:";
  facebookTitle.innerHTML = "فيسبوك:";
  orr.innerHTML = "أو";
  sendTitle.innerHTML = "تواصل معنا مباشرة";
  nameTitle.innerHTML = "الاسم الأول والاخير:";
  yourEmail.innerHTML = "بريدك الالكتروني:";
  messageTitle.innerHTML = "الرسالة:";
  sendButton.innerHTML = "إرسال";

  sentMessage = "تم إرسال رسالتك، شكرا لك على التواصل معنا!";
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

  document.title = "Buraco em 1 | Contate-nos";

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

  headerTitle.innerHTML = "Buraco em 1 <br> Contate-nos";
  startTitle.innerHTML = "Contate-nos";
  startText.innerHTML = "Mais detalhes e informações sobre nós";

  footerTitle.innerHTML = "Projetado e programado por:";
  footerText.innerHTML = "Ayham J.";
  goal.innerHTML = "Este site foi desenvolvido e construído para atender aos requisitos para aprovação no capítulo 'Desenvolvimento de Sites' no 11º ano, I.T. principal.";

  aboutusTitle.innerHTML = "Sobre nós";
  aboutusText.innerHTML = "Somos um resort de golfe localizado em Portugal";
  whyTitle.innerHTML = "Por que nos escolher?";
  whyText.innerHTML = "Oferecemos instalações, serviços e atividades de alta qualidade, por preços decentemente baixos";
  detailsTitle.innerHTML = "Nossos dados de contato";
  numberTitle.innerHTML = "Número de telefone:";
  emailTitle.innerHTML = "E-mail:";
  facebookTitle.innerHTML = "Facebook:" ;
  orr.innerHTML = "OU";
  sendTitle.innerHTML = "Contate-nos diretamente";
  nameTitle.innerHTML = "Nome e sobrenome:";
  yourEmail.innerHTML = "Seu e-mail:";
  messageTitle.innerHTML = "Mensagem:";
  sendButton.innerHTML = "Enviar";

  sentMessage = "A mensagem foi enviada, obrigado por entrar em contato conosco!";
}

function send(){
  var name = nameInput.value;
  var email = emailInput.value;
  var message = messageInput.value;
  c0 = true;

  if (name == "" || name == "This field is required") {
    nameInput.style.color = "red";
    nameInput.value = "This field is required"
    c0 = false;
  }
  if (email == "" || email == "This field is required"){
    emailInput.style.color = "red";
    emailInput.value = "This field is required"
    c0 = false;
  }
  if (message == "" || message == "This field is required"){
    messageInput.style.color = "red";
    messageInput.value = "This field is required"
    c0 = false;
  }
  if(c0){
    alert(sentMessage);
  }
  else{}
}

function reset(target){
  if (target == "name") {
    if (nameInput.style.color == "red") {
      nameInput.style.color = "black";
      nameInput.value = "";
    }
    else{}
  }
  else if (target == "email") {
    if (emailInput.style.color == "red") {
      emailInput.style.color = "black";
      emailInput.value = "";
    }
    else{}
  }
  else if (target == "message") {
    if (messageInput.style.color == "red") {
      messageInput.style.color = "black";
      messageInput.value = "";
    }
    else{}
  }
  else{}
}
