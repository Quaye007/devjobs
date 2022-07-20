
document.getElementById('filter').addEventListener('click',
function(){
   document.querySelector('.bg-modal').style.display ='flex';
});



document.getElementById('close').addEventListener('click', 
function close(){
   document.querySelector('.bg-modal').style.display ='none'

});




// dark theme function


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







document.querySelector('#search-button').addEventListener('click', filterList);






// document.querySelector('#search-input').addEventListener('input', filterList);

function filterList(){
    const searchInput = document.querySelector('#search-input');
    const filter = searchInput.value.toLowerCase();
   
   
  
    const listItems = document.querySelectorAll('.job-1');

    listItems.forEach((item) => {
        let text = item.textContent
  

        if(text.toLowerCase().includes(filter.toLowerCase())){
            item.style.display = '';
    
        } else{
            item.style.display = 'none';
           
        }
    })
   


}

   
   
function filterListTwo(){
    const locationInput = document.querySelector('#location-input');
    const filter = locationInput.value.toLowerCase();
   
   
  
    const listItemsTwo = document.querySelectorAll('.job-1');

    listItemsTwo.forEach((item) => {
        let text = item.textContent
  

        if(text.toLowerCase().includes(filter.toLowerCase())){
            item.style.display = '';
    
        } else{
            item.style.display = 'none';
           
        }
    })
   


}

  