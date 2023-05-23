// first implement the code when click on star they converted into filled stars 
// if anyone click on 4th star than 1,2,3,4 become filled stars 
// when we click on submit then submission happend, it detect that submit button clicked 


/// in tech council there are many rating stars, so you have to make i%5 , so change to dard i ....(i-(i%5))
// which star clicked 
/*
function whichstar(){
    var i ; 
    $(".0").on("click", i = 0 ) ; 
    $(".1").on("click", i = 1) ; 
    $(".2").on("click", i = 2 ) ; 
    $(".3").on("click", i = 3 ) ; 
    $(".4").on("click", i = 4 ) ; 
    return i ; 
}*/
// var which document.querySelector(".class_name") ;
$('i').click(function() {
    const classes = $(this).attr('class').split(' ');
    var whichStar = classes[0] ;
    var howMany  = whichStar%5 ; 
    for(var i = whichStar; i>= whichStar-howMany ;i--){
        var className = "." + i ; // this is the way of calling classes by variable name 
        $(className).html(' <i class="fas fa-star me-1"></i> ') ; 
        
    }
   
  });
  /*
$(".3").on("click", function(){
    $(".0").html(' <i class="fas fa-star me-1"></i> ') ; 
    $(".1").html(' <i class="fas fa-star me-1"></i> ') ; 
    $(".2").html(' <i class="fas fa-star me-1"></i> ') ; 
    $(".3").html(' <i class="fas fa-star me-1"></i> ') ; 

    // starChange() ; 
}) ; 
function starChange(){
    var i = whichstar() ; 
  
        for(j = 0 ; j<=i ; j++){
            $(".i").html(' <i class="fas fa-star me-1"></i> ') ; 
        }
        // alert("hi") ; 
   
}

*/
