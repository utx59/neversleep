var btn=document.querySelector("#show");
var infoModal=document.querySelector("#infoModal");
var close=document.querySelector("#close");

btn.addEventListener("click", function(){
    infoModal.showModal();
})
close.addEventListener("click", function(){
    infoModal.close();
})