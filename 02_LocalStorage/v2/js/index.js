function appliquerTheme(theme){

document.getElementById("maPage").className=theme;

localStorage.setItem("theme",theme);

}

function enregistrerParagraphe(){

let texte=document.getElementById("txtParag").value;

if(texte==""){

alert("Veuillez saisir un texte.");

return;

}

document.getElementById("p1").innerHTML=texte;

localStorage.setItem("paragraphe",texte);

}

function initialiser(){

if(typeof(Storage)!=="undefined"){

let theme=localStorage.getItem("theme");

if(theme!=null){

document.getElementById("maPage").className=theme;

}

let texte=localStorage.getItem("paragraphe");

if(texte!=null){

document.getElementById("p1").innerHTML=texte;

document.getElementById("txtParag").value=texte;

}

}else{

alert("Votre navigateur ne supporte pas LocalStorage");

}

}