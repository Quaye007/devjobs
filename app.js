


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


     let data2="";

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



<div  class="company-box" id="mobile-company"    >
        <h1 > ${values.company}</h1> 
</div>






<div class="domain-box" >






<span  >${values.company}</span>
<span class="little"></span>
</div>


<div class="job-type">
    
  
    <button class="search-button" id="site" onclick="window.location.href='https://www.snapchat.com/'">Company Site</button>
    
</div>








</div>

</div>




<div class="job-page" id="des-page"  >





<div class="job-1" id="role-des" >


    

    <div class="side-a">

   

    <div class="time-type">
       <div class="clock"> </div>


       <div class="type">
        <span class=typpe>.   Part Time</span>
       </div>
    </div>



     <div class="role" id="role-b">
        <span>Senior Software Developer</span>
       
    </div>

  

    

    <div class="loc">
        <span>  United Kingdom</span>
    </div>


</div>




<div class="side-b">


    <button class="search-button" id="apply-btn btn2" onclick="window.location.href=''">Apply Now</button>


 </div>






  <div class="company-des">

    <p>
        At Snap, we believe that reinventing the camera represents our
         greatest opportunity to improve the way people live and communicate.
          We contribute to human progress by empowering people to express themselves, 
          live in the moment, learn about the world, and have fun together.
          At Snap, we believe that having a team of 
            diverse backgrounds and voices working together 
            will enable us to create innovative products that 
            improve the way people live and communicate. 
    </p>


    <div class="requirement-section">

        <h1> Requirements</h1>


        <p class="rec">
            At Snap, we believe that having a team of 
            diverse backgrounds and voices working together 
            will enable us to create innovative products that 
            improve the way people live and communicate. Snap is
             proud to be an equal opportunity employer, and 
             committed to providing employment opportunities 
             regardless of race, religious creed, color,
              national origin, ancestry, physical disability, mental disability,
               medical condition, genetic information, marital status, sex,
                gender, gender identity, gender expression, pregnancy,
                 childbirth and breastfeeding, age, sexual orientation, 
                 military or veteran status, or any other protected 
                 classification, in accordance with applicable federal,
                 state, and local laws. EOE, including disability/vets.
        </p>



        <ul class="rec-2">
            <li>Proven track record of building static website</li>
            <li>Tech stack: HTML/CSS, React, TypeScript</li>
            <li>Experienced in optimising for SEO</li>
            <li>Ability to work on the project basis</li>
            <li>Experience with content management systems</li>


        </ul>



        <h1> What You Will Do</h1>

        <ul class="rec-3">
            <li>Must have excellent presentation and communication skills</li>
            <li>Must have the “can do” attitude and willingness to learn new skills to improve performance</li>
            <li>Meet deadlines given by Tech Manager/Product Owner</li>
            <li>Collaborate with team members to brainstorm about new products, provide each other with technical insight and review working drafts.</li>
            <li>Experience with content management systems</li>


        </ul>

    </div>



</div>


</div>









</div>
<!-- 
<button class="search-button  load">Search</button> -->




<div class="job-footer">
<div class="comp-des">

    <h3>Senior Software Developer</h3>
    <span>Snap Inc</span>
    
</div>

<div class="footer-button">

    <button class="search-button" id="apply-btn" onclick="window.location.href=''">Apply Now</button>
    
</div>


</div>




        
        
        
        ` 
     });

     document.getElementById("main-dev").innerHTML=data2;

 })











