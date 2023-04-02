
// ================navmenu===============
$(function () {
    let boxWidth = $(".side-nav-menu .nav-tab").outerWidth()
  
    $(".side-nav-menu").animate({left: -boxWidth }, 500);
    $(".side-nav-menu i.open-close-icon").click(function (e) { 
      e.preventDefault();
      if ($(".side-nav-menu").css("left") == "0px"){
        $(".side-nav-menu").animate({left: -boxWidth }, 500);
        $(".open-close-icon").addClass("fa-align-justify");
        $(".open-close-icon").removeClass("fa-x");
        $(".links li").animate({top: 300 }, 500);
      }
      else{
        $(".side-nav-menu").animate({ left: 0 }, 500);
        $(".open-close-icon").removeClass("fa-align-justify");
        $(".open-close-icon").addClass("fa-x");
   
    $(".links li").animate({top: 0 }, 500);

      }
      console.log("hello menue");
    
      
    });
  });

  let response;

$(document).ready(function () {
    getPopularMovies();
});
// =================== get trending movie ===================
async function getTrendingMovies(){
    let api = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=d256fc7c5692a698a69dc790ea9f34bc`);
    response =await api.json();
    console.log(response);
    displayMovies(response.results);
}

function displayMovies(array){
    let movie = "";
    for (let i = 0; i < array.length; i++) {
        let poster_path = ``;
                if (response.results[i].poster_path==null) {

                    poster_path = `https://image.tmdb.org/t/p/original/3jE3pFIN42ykmgcMLwDGjqwcmUI.jpg`;
        } else {
            poster_path = `https://image.tmdb.org/t/p/original${response.results[i].poster_path}`;
        }
        movie+=`
        <div class="col-md-6 col-lg-4 my-3 myM  shadow">
        <div class="movie shadow rounded position-relative">
            <div class="post">
                <img class="image w-100" src= "https://image.tmdb.org/t/p/original${poster_path }">
            </div>
            <div class="layer d-flex align-items-center">
                <div class="info p-0">
                    <h2 class="style">${response.results[i].title}</h2>
                    <p class="style">${response.results[i].overview}</p> 
                    <p>${response.results[i].vote_average}</p> 
                    <p>${response.results[i].release_date}</p> 
                </div>
            </div>
        </div>
    </div>
        `
    }
    document.getElementById("rowData").innerHTML = movie;
}





// =================== get popular movie ===================

async function getPopularMovies(){
    let api = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d256fc7c5692a698a69dc790ea9f34bc`);
    response =await api.json();
    console.log(response);
    displayMovies(response.results);
}

// =================== get top rated movie ===================
async function getTopRatedMovies(){
    let api = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=d256fc7c5692a698a69dc790ea9f34bc`);
    response =await api.json();
    displayMovies(response.results);
}

// =================== get Upcomming movie ===================
async function getUpComming(){
    let api = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=d256fc7c5692a698a69dc790ea9f34bc`);
    response =await api.json();
    displayMovies(response.results);
}

// =================== get now-palying movie ===================
async function getNowPlaying(){
    let api = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=d256fc7c5692a698a69dc790ea9f34bc`);
    response =await api.json();
    displayMovies(response.results);
}

// =================== search movie by word ===================
async function searchMovie(word){
    let api = await fetch(`https://api.themoviedb.org/3/search/movie?query=${word}&api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&include_adult=false`);
    response =await api.json();
    displayMovies(response.results);
}

// =================== search movie by search ===================
async function searchMovieBySearch(search){
    let api = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=d256fc7c5692a698a69dc790ea9f34bc&query=${search}`);
    response =await api.json();
    displayMovies(response.results);
}






let links = document.querySelectorAll('li')
    
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (e) {
 
       const category = e.target.innerText; 
 
       console.log(category); //log data
 
       if (category== 'Now playing') {
        window.location.href=`#${category}`;
        $("html, body").animate({scrollTop:0},2000)
        getNowPlaying()
       }
       if(category=='Popular'){
        window.location.href=`#${category}`;
        $("html, body").animate({scrollTop:0},2000)
        getPopularMovies();
       }
       if(category=='Top Rated'){
        window.location.href=`#${category}`;
        $("html, body").animate({scrollTop:0},2000)
        getTopRatedMovies();
       }
     
       if (category=='Trending') {
        window.location.href=`#${category}`;

        $("html, body").animate({scrollTop:0},2000)
        getTrendingMovies();
       }
       if (category=='Upcoming') {
        window.location.href=`#${category}`;
        $("html, body").animate({scrollTop:0},2000)
        getUpComming();
       }
       


       if (category=='Contact Us') {
        console.log(category);
        window.location.href="#contact";

       }
       
    });
 }
 

// =====================    ======================


$(document).ready(function(){
    $("#allMovies").on("keyup", function() {
     let inputValue = $('#allMovies').val();
     if(inputValue==""){
        $('#rowData').html('');
        return false;
     }

    
     
     else{
        searchMovie(inputValue);
        return true;
     }
     
    });
  });





  $(document).ready(function(){
    $("#search").on("keyup", function() {
     let inputValuee = $('#search').val();
     if(inputValuee==""){
        $('#rowData').html('');
        return false;

     }
     else{
        searchMovieBySearch(inputValuee);
        return true;

     }
    });
  });

//   ========================== validation ======================

let userName             = document.getElementById("name");
let userEmail            = document.getElementById("email");
let userPhone            = document.getElementById("phone");
let userAge              = document.getElementById("age");
let userPassword         = document.getElementById("password");
let userRePassword       = document.getElementById("rePassword");
let userNameAlert        = document.getElementById("namealert");
let userEmailAlert       = document.getElementById("emailalert");
let userPhoneAlert       = document.getElementById("phonealert");
let userAgeAlert         = document.getElementById("agealert");
let userpasswordAlert    = document.getElementById("passwordalert");
let userRepasswordAlert  = document.getElementById("repasswordalert");





userNameAlert.style.display="none";
userAgeAlert.style.display="none";
userpasswordAlert.style.display="none";
userRepasswordAlert.style.display="none";
userEmailAlert.style.display="none";
userPhoneAlert.style.display="none";


addEventListener("click",function(){

})

    userName.addEventListener("keyup",userNameValid)
  
 
    function userNameValid(){
        let regex = /^[a-zA-Z0-9]+$/;
        if(regex.test(userName.value)==true)
        {
            userNameAlert.style.display="none";
            return true
        }
        else{
            userNameAlert.style.display="block";

            return false;
        }
    }
    userEmail.addEventListener("keyup",userEmailValid)


   

    function userEmailValid(){
        let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
        if(regex.test(userEmail.value)==true)
        {
        
            userEmailAlert.style.display="none";
            return true
        }
        else{
            userEmailAlert.style.display="block";
            return false;
        }
    }
    userPhone.addEventListener("keyup",userPhoneValid)

  

    function userPhoneValid(){
        let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/; 
        if(regex.test(userPhone.value)==true)
        {
            userPhoneAlert.style.display="none";
            return true
        }
        else{
            userPhoneAlert.style.display="block";

   
            return false;
        }
    }
    userAge.addEventListener("keyup",userAgeValid)


   
    function userAgeValid(){
        let regex = /^[1-9][0-9]?$|^100$/; 
        if(regex.test(userAge.value)==true)
        {
            userAgeAlert.style.display="none";
            return true
        }
        else{
            userAgeAlert.style.display="block";

            console.log("dkldkdlkdlk")

            return false;
        }
    }
    userPassword.addEventListener("keyup",userPasswordValid)
   
    function userPasswordValid(){
        let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; 
        if(regex.test(userPassword.value)==true)
        {  
            userpasswordAlert.style.display="none";
            return true
        }
        else{
            userpasswordAlert.style.display="block";

            return false;
            
        }
    }
    userRePassword.addEventListener("keyup",userRePasswordValid)

    function userRePasswordValid(){
        if(userPassword.value==userRePassword.value)
        {
           
            userRepasswordAlert.style.display="none";
            return true
        }
        else{
            userRepasswordAlert.style.display="block";
            return false;
        }
    }

