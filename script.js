// script pour changement des photos automatique
var user_keys = [],
    konami = '38,38,40,40,37,39,37,39,66,65';
document.onkeydown = function(e){
  user_keys.push(e.keyCode)

  if (user_keys.toString().indexOf(konami) >= 0) {

    let change = document.getElementsByClassName("villani")
    for (i=0; i < change.length; i++ ) {
      change[i].src = "photos/CVillani.webp";
      }
    
    let change1 = document.getElementsByClassName("thuglife")
    for (i=0; i < change1.length; i++ ) {
      change1[i].src = "photos/b2oba.webp";
      }

    let change2 = document.getElementsByClassName("poincare")
    for (i=0; i < change2.length; i++ ) {
    change2[i].src = "photos/poincare.webp";
    }

    user_keys = [];
  }
}

// script pour ouvrir la pop up selon l'id du profil
function info_page(id) {
  if (id=="01") {
    var name="Éléonore D'Herbigny";
    var age="x ans";
    var mail="mail: mail@gmail.com";
    var tel="tél: 00.00.00.00.00";
    var lien2="LinkedIn: www.monlien.com";
    var message=name+'\n\n'+age+'\n'+mail+'\n'+tel+'\n\n'+lien2;
    
    alert(message);
  }
  if (id=="02") {
    var name="Cyril Simonin";
    var age="x ans";
    var mail="mail: mail@gmail.com";
    var tel="tél: 00.00.00.00.00";
    var lien2="LinkedIn: www.monlien.com";
    var message=name+'\n\n'+age+'\n'+mail+'\n'+tel+'\n\n'+lien2;
    
    alert(message);
  }
  if (id=="03") {
    var name="Remi Julien";
    var age="x ans";
    var mail="mail: mail@gmail.com";
    var tel="tél: 00.00.00.00.00";
    var lien2="LinkedIn: www.monlien.com";
    var message=name+'\n\n'+age+'\n'+mail+'\n'+tel+'\n\n'+lien2;
    
    alert(message);
  }
  if (id=="04") {
    var name="Frédéric Bertrand";
    var age="x ans";
    var mail="mail: mail@gmail.com";
    var tel="tél: 00.00.00.00.00";
    var lien1="Git: www.monlien.com";
    var lien2="LinkedIn: www.monlien.com";
    var message=name+'\n\n'+age+'\n'+mail+'\n'+tel+'\n\n'+lien1+'\n'+lien2;
    
    alert(message);
  }
  if (id=="05") {
    var name="Godegroy Courtin";
    var age="x ans";
    var mail="mail: mail@gmail.com";
    var tel="tél: 00.00.00.00.00";
    var lien1="Git: www.monlien.com";
    var lien2="LinkedIn: www.monlien.com";
    var message=name+'\n\n'+age+'\n'+mail+'\n'+tel+'\n\n'+lien1+'\n'+lien2;
    
    alert(message);
  }
  if (id=="06") {
    var name="Stéphanie Dumont";
    var age="x ans";
    var mail="mail: mail@gmail.com";
    var tel="tél: 00.00.00.00.00";
    var lien1="Git: www.monlien.com";
    var lien2="LinkedIn: www.monlien.com";
    var message=name+'\n\n'+age+'\n'+mail+'\n'+tel+'\n\n'+lien1+'\n'+lien2;
    
    alert(message);
  }
  if (id=="07") {
    var name="Sylvain Elineau";
    var age="x ans";
    var mail="mail: mail@gmail.com";
    var tel="tél: 00.00.00.00.00";
    var lien1="Git: www.monlien.com";
    var lien2="LinkedIn: www.monlien.com";
    var message=name+'\n\n'+age+'\n'+mail+'\n'+tel+'\n\n'+lien1+'\n'+lien2;
    
    alert(message);
  }
  if (id=="08") {
    var name="Benjamin Gouchon";
    var age="x ans";
    var mail="mail: mail@gmail.com";
    var tel="tél: 00.00.00.00.00";
    var lien1="Git: www.monlien.com";
    var lien2="LinkedIn: www.monlien.com";
    var message=name+'\n\n'+age+'\n'+mail+'\n'+tel+'\n\n'+lien1+'\n'+lien2;
    
    alert(message);
  }
  if (id=="09") {
    var name="Patrick Mwimanzi";
    var age="x ans";
    var mail="mail: mail@gmail.com";
    var tel="tél: 00.00.00.00.00";
    var lien1="Git: www.monlien.com";
    var lien2="LinkedIn: www.monlien.com";
    var message=name+'\n\n'+age+'\n'+mail+'\n'+tel+'\n\n'+lien1+'\n'+lien2;
    
    alert(message);
  }
  if (id=="10") {
    var name="Sylvain Lamoureux";
    var age="32 ans";
    var mail="mail: lamoureux.sylvain@gmail.com";
    var tel="tél: 06.61.01.03.15";
    var lien1="Git: https://github.com/lamoureux-sylvain";
    var lien2="LinkedIn: https://www.linkedin.com/in/sylvain-lamoureux/";
    var message=name+'\n\n'+age+'\n'+mail+'\n'+tel+'\n\n'+lien1+'\n'+lien2;
    
    alert(message);
  }
  if (id=="11") {
    var name="Rolique Oponga";
    var age="x ans";
    var mail="mail: mail@gmail.com";
    var tel="tél: 00.00.00.00.00";
    var lien1="Git: www.monlien.com";
    var lien2="LinkedIn: www.monlien.com";
    var message=name+'\n\n'+age+'\n'+mail+'\n'+tel+'\n\n'+lien1+'\n'+lien2;
    
    alert(message);
  }
  if (id=="12") {
    var name="Paola Pondi";
    var age="x ans";
    var mail="mail: mail@gmail.com";
    var tel="tél: 00.00.00.00.00";
    var lien1="Git: www.monlien.com";
    var lien2="LinkedIn: www.monlien.com";
    var message=name+'\n\n'+age+'\n'+mail+'\n'+tel+'\n\n'+lien1+'\n'+lien2;
    
    alert(message);
  }
  if (id=="13") {
    var name="Pierre Rabu";
    var age="x ans";
    var mail="mail: mail@gmail.com";
    var tel="tél: 00.00.00.00.00";
    var lien1="Git: www.monlien.com";
    var lien2="LinkedIn: www.monlien.com";
    var message=name+'\n\n'+age+'\n'+mail+'\n'+tel+'\n\n'+lien1+'\n'+lien2;
    
    alert(message);
  }
  if (id=="14") {
    var name="Étienne Rist";
    var age="20 ans";
    var mail="mail: etiennerist9@gmail.com";
    var tel="tél: 07.82.67.66.90";
    var lien1="Git: https://github.com/etienne-rist";
    var lien2="LinkedIn: https://www.linkedin.com/in/etienne-rist-0750931a4/";
    var message=name+'\n\n'+age+'\n'+mail+'\n'+tel+'\n\n'+lien1+'\n'+lien2;
    
    alert(message);
  }
  if (id=="15") {
    var name="Alexandre Vilbert";
    var age="25 ans";
    var mail="alexandre.vilbert@gmail.com";
    var tel="06.65.02.33.07";
    var lien1="Git: https://github.com/AlexV2204";
    var lien2="LinkedIn: https://www.linkedin.com/in/alexandre-vilbert-5408051b0/";
    var message=name+'\n\n'+age+'\n'+mail+'\n'+tel+'\n\n'+lien1+'\n'+lien2;
    
    alert(message);
  }
}
 

function info_page2(id) {
  id = id+"ip";
  var elmt = document.getElementById(id);
  var blur = document.getElementById("blur");
  
  blur.style.visibility="visible";
  elmt.style.visibility="visible";
}
