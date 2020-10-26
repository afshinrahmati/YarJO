$(".box-open").hide();
$(".zir-majmo").hide();
$(".fa-angle-down").hide();
$(".menu-show").on("click", function ali() {
    $(".a-men").hide(); 
    $(".menu-show").hide(); 
    $(".box-open").show();
    $(".menu").css("width", "5%");  
});
$(".box-open").on("click", function ali() {
    $(".a-men").show(); 
    $(".menu-show").show(); 
    $(".box-open").hide();
    $(".menu").css("width", "18%");  
});
$(".cople").on("click", function ali() {
    $(".zir-majmo").show();
    $(".fa-angle-down").show();
    $(".fa-angle-left").hide();
    
});
$(".fa-angle-down").on("click", function ali() {
   
    $(".zir-majmo").hide();
    $(".fa-angle-down").hide();
    $(".fa-angle-left").show();
    
});