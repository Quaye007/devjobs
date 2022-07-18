


// const search = () => {
//    const searchbox = document.getElementById("search-input").ariaValueMax.toUpperCase();
//    const jobitems = document.getElementById("job-list")
//    const job = document.querySelectorAll(".job-1")
//    const jname = jobitems.getElementsByTagName("span")


//    for (var i = 0; i < jname.lenngth; i++ ){
//       let match = job[i].getElementsByTagName('span')[0];

//       if (match) {
//          let textvalue = match.textContent || match.innerHTML

//          if (textvalue.toUpperCase().indexOf(searchbox) > -1){
//                job[i].style.display = "";


//          } else {
//             job[i].style.display = "none";
//          }
//       }

//    }
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

   
   
    
  










