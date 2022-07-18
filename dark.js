
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
};


document.getElementById('load-more').addEventListener('click',
function(){
   document.getElementById('page-2').style.display ='flex';
   document.getElementById('load-more').style.display = 'none';
});







checkbox =document.getElementById('job-type');

checkbox.addEventListener('change', e=>{
    if(e.target.checked){
        document.querySelector('#part-time-role').style.display ='none';
    } else{
        document.querySelector('#part-time-role').style.display ='';
    }
})




// checkbox =document.getElementById('job-type');

// checkbox.addEventListener('change', e=>{
//     if(e.target.checked){
//         document.querySelector('#part-time-role'[0]).style.display ='none';
//     } else{
//         document.querySelector('#part-time-role'[0]).style.display ='';
//     }
// })




// function checker (){
//     var checkbox = document.getElementById('job-type');

//     if(checkbox.checked != true){
//         document.querySelectorAll('#part-time-role').style.display ='';
//     }else{
//         document.querySelectorAll('#part-time-role').style.display ='none';
//     }
// }