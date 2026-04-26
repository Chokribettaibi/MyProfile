// $(document).ready(function(){
//     $("p").mouseenter(function(){
//         $(this).css("color", "#00F");
//     }),
//     $(".prposition").click(function(){
//         $(".prposition-text").slideDown();
//     }) 
// } )
let mytext = 'Quelque fois on a besoin de dire des choses difficiles, mais on devrait tâcher de mes dore aisso simplement que l\'on peut. \n \"Hardy\" ',
i = 0;
let parol = document.getElementById('parol');
let myName = document.getElementById('myName');

myName.onclick = function () {
    'use strict';
    var typWrite = setInterval(function(){
        parol.textContent += mytext[i];
        i = i + 1;
        if(i>mytext.length - 1) {
            clearInterval(typWrite);
        };
        // parol.style.color = "red";
        // parol.style.fontFamily = "Algerian"
    },100 );
}