


// const search = () => {
//    const searchbox = document.getElementById("search-input").ariaValueMax.toUpperCase();
//    const jobitems = document.getElementById("job-list")
//    const job = document.getElementById("job-1")
//    const jname = jobitems.getElementById("item")


//    for (var i = 0; i < jname.lenngth; i++ ){
//       let match = job.getElementById("item");

//       if (match) {
//          let textvalue = match.textContent || match.innerHTML

//          if (textvalue.toUpperCase().indexOf(searchbox) > -1){
//                job.style.display = "";


//          } else {
//             job.style.display = "none";
//          }
//       }

//    }
// }




 
// function myFunction(){
//     filterListTwo();
//     filterList();
// }





fetch('./data.json').then((data)=>{

    return data.json();
 }).then((completedata)=>{
     console.log(completedata);


     data2 ='';
   

     completedata.map((values)=>{
        data2+=`
        
    
        <div class="header">


        <div class="logo-side">
            <h1><a href="/index.html">devjobs</a></h1>
        </div>
    
        <div class="nav-menu">
           <input type="checkbox" id="switchTwo">
           <label for="switch"></label>
        </div>
    
    
    </div>
    






<div class="search-bar" id="job-header" >



<div  class="company-box" id="mobile-company" >
        <h1 > ${values.company}</h1> 
</div>






<div class="domain-box" >






<span  >${values.company}</span>
<span class="little"></span>
</div>


<div class="job-type">
    
  
    <button class="search-button" id="site" onclick="window.location.href='${values.website}'">Company Site</button>
    
</div>








</div>

</div>




<div class="job-page" id="des-page"  >





<div class="job-1" id="role-des" >


    

    <div class="side-a">

   

    <div class="time-type">
       <div class="clock">${values.postedAt}</div>


       <div class="type">
        <span class=typpe>. ${values.contract}</span>
       </div>
    </div>



     <div class="role" id="role-b">
        <span> ${values.position}</span>
       
    </div>

  

    

    <div class="loc">
        <span> ${values.location}</span>
    </div>


</div>




<div class="side-b">


    <button class="search-button" id="apply-btn btn2" onclick="window.location.href=' ${values.apply}'">Apply Now</button>


 </div>






  <div class="company-des">

    <p>
    ${values.description} 
    </p>


    <div class="requirement-section">

        <h1> Requirements</h1>


        <p class="rec">
        ${values.requirements.content}
        </p>



        <ul class="rec-2">
       <li> ${values.requirements.items[0]}</li>
       <li> ${values.requirements.items[1]}</li>
       <li> ${values.requirements.items[2]}</li>
       <li> ${values.requirements.items[3]}</li>

        </ul>



        <h1> What You Will Do</h1>

        
        <p class="rec">
        ${values.role.content}
        </p>
        <ul class="rec-3">
            <li>   ${values.role.items[0]}</li>
            <li>   ${values.role.items[1]}</li>
            <li>   ${values.role.items[2]}</li>
            <li>   ${values.role.items[3]}</li>
   
           

        </ul>

    </div>



</div>


</div>









</div>
<!-- 
<button class="search-button  load">Search</button> -->




<div class="job-footer">
<div class="comp-des">

    <h3>  ${values.position} </h3>
    <span>  ${values.company} </span>
    
</div>

<div class="footer-button">

    <button class="search-button" id="apply-btn" onclick="window.location.href=''${values.apply}">Apply Now</button>
    
</div>


</div>




        
        
        
        ` 
     });

     document.getElementById("main-dev").innerHTML=data2;

 }) 




 loadInitialItems();






