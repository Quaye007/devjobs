
document.getElementById('filter').addEventListener('click',
function(){
   document.querySelector('.bg-modal').style.display ='flex';
});



document.getElementById('close').addEventListener('click', 
function(){
   document.querySelector('.bg-modal').style.display ='none'

});

var icon = document.getElementById("switch");

icon.onclick = function(){
   document.body.classList.toggle("dark-theme")
}




