// default

window.onresize = function() {
       this.onloadmyfunction();
};
window.onload = function() {
    this.onloadmyfunction();
};


$(window).on('beforeunload', function(){
    return false;
});


 
 
function onloadmyfunction()
{
    var x = window.innerWidth;
    let Links = document.querySelector(".nav");
    if (x<768)
    {        
        let navbar = document.querySelector(".navbar-nav");
        navbar.append(Links);
    }
    else{
        let side = document.querySelector(".sidebar-sticky");
        side.append(Links);
    }
    
      let l = Links.querySelector(".active");
      l.classList.remove("active");
      var atabLinks = document.querySelector("#Profile");
      atabLinks.classList.add("active");
    
    clearDataResult();
    var data = {
        data: "profile"
    };
    $.post("TeacherControllerServlet",data,processresponse);
    
}

function processresponse(responseText) {
    responseText = responseText.trim();
    clearDataResult();
    $(".data-result").append(responseText);
}
 
function clearDataResult()
{
    $(".data-result").html("");
}

function showContent(e)
{ 
    var id = e.getAttribute("id");
    let bodyTitle = document.querySelector("h1.h1");
//    bodyTitle.innerHTML = id;

    var tabb = document.querySelector("ul.nav.flex-column");
    var tabLinks = tabb.querySelector(".nav-item .nav-link.active");
    tabLinks.classList.remove("active");

//    console.log(id);
    var atabLinks = document.querySelector("#"+id);
    atabLinks.classList.add("active");
    
    
    
    var data = {
        data:id
    };
    clearDataResult();
    $.post("TeacherControllerServlet",data, processresponse);    
}

function logoutdas(x){
    var id = x.getAttribute("id");
    var data = {
        code: id
    };
    clearDataResult();
    $.post("LogoutController", data, function(responseText){
        responseText = responseText.trim();
        console.log(responseText);
        if(responseText.indexOf("html") != -1){
            window.location = responseText;
        }else{
            window.location = "accessdenied.html";
        }
    });
}

//loader js Required
$('.loader').hide();
$(document)
  .ajaxStart(function () {
    $('.loader').show();
  })
  .ajaxStop(function () {
    $('.loader').hide();
  });
