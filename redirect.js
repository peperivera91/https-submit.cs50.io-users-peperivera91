function redirect(){ 
let a=document.getElementById('form_input_buttons');
var frase=document.getElementById('input_text_from');
var seach=frase.value;
a.addEventListener('click',function (event) {
event.preventDefault(); 
setTimeout(()=> location.href="https://www.google.com/search?q="+seach+"&btnI=Voy+a+tener+suerte&sca_esv=596620277&hl=es&source=hp&ei=30ucZemnMLzIkPIP-emE2AY&iflsig=",1000);
});
}