fetch('data.json').then((data)=>{

    return data.json();
 }).then((completedata)=>{
     console.log(completedata);


     let data1="";

     completedata.map((values)=>{
        data1+=`
        <div class="job-1"  id="job-1"  >
    
            <a class="linker" href="/roles/dev1.html">
            <div style="background-color:${values.logoBackground};" class="img-box">
                <img  src=${values.logo} alt="">
            </div>
    
            <div class="time-type">
                
               <div class="clock"> ${values.postedAt}</div>
               
               
               <div class="type">
                <span class=typpe>${values.contract}</span>
               </div>
            </div>
    
    
    
             <div class="role">
                <span class="item" id="item" > ${values.position}</span>
            </div>
    
            <div class="company">
                <span id="company-name">${values.company}</span>
            </div>
    
            <div class="loc">
                <span id="company-location">${values.location} </span>
            </div>
    
        </a>
    
    
    
        </div>` 
     });

     document.getElementById("job-list").innerHTML=data1;

 })









// mobile view

document.getElementById('filter').addEventListener('click',
function(){
document.querySelector('.bg-modal').style.display ='flex';
});



document.getElementById('close').addEventListener('click', 
function close(){
document.querySelector('.bg-modal').style.display ='none';

});




// dark theme function


var icon = document.getElementById("switch");

icon.onclick = function(){
document.body.classList.toggle("dark-theme")
};




var icon = document.getElementById("dark");

icon.onclick =  darkMode =()=>{
document.body.classList.toggle("dark-theme")
};




darkMode();






// document.getElementById('load-more').addEventListener('click',
// function(){
//    document.getElementById('page-2').style.display ='flex';
//    document.getElementById('load-more').style.display = 'none';
// });











checkbox =document.getElementById('.typpe');

checkbox.addEventListener('change', e=>{
 if(e.target.checked){
     document.querySelector('#part-time-role').style.display ='none';
 } else{
     document.querySelector('#part-time-role').style.display ='';
 }
})




// checkbox =document.getElementById('.job-type');

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







document.getElementById('search-button').addEventListener('click', filterList());





// document.querySelector('#search-input').addEventListener('input', filterList);

function filterList(){
 const searchInput = document.getElementById("search-input");
 const filter = searchInput.value.toLowerCase();



 const listItems = document.getElementById('job-1');

 listItems.forEach((item) => {
     let text = item.textContent


     if(text.toLowerCase().includes(filter.toLowerCase())){
         item.style.display = '';
 
     } else{
         item.style.display = 'none';
        
     }
 })



}

filterList();

// function filterListTwo(){
//  const locationInput = document.querySelector('#location-input');
//  const filter = locationInput.value.toLowerCase();



//  const listItemsTwo = document.querySelectorAll('.job-1');

//  listItemsTwo.forEach((item) => {
//      let text = item.textContent


//      if(text.toLowerCase().includes(filter.toLowerCase())){
//          item.style.display = '';
 
//      } else{
//          item.style.display = 'none';
        
//      }
//  })



// }

