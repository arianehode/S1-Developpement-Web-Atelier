function appliquerTheme(theme){

document.getElementById("maPage").className=theme;

localStorage.setItem("theme",theme);

}

function initialiser(){

if(typeof(Storage)!=="undefined"){

let theme=localStorage.getItem("theme");

if(theme!=null){

document.getElementById("maPage").className=theme;

}

}else{

alert("Votre navigateur ne supporte pas LocalStorage");

}

}