// script pour changement des photos automatique
var user_keys = [],
    konami = '38,38,40,40,37,39,37,39,66,65';
document.onkeydown = function(e){
  user_keys.push(e.keyCode)

  if (user_keys.toString().indexOf(konami) >= 0) {

    let change = document.getElementsByClassName("villani")
    for (i=0; i < change.length; i++ ) {
      change[i].src = "photos/CVillani.webp";
      console.log(i);
    }
    user_keys = [];
  }
}
