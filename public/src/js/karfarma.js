$(".box-open").hide();
$(".zir-majmo").hide();
$(".fa-angle-down").hide();
$(".menu-show").on("click", function ali() {
    $(".container.form").css("width","85%");
    $(".container.form").css("margin-right","11%");
    $(".a-men").hide();
    $(".menu-show").hide();
    $("#collapseOne").hide();
    $(".x1111").hide();
    $(".box-open").show();
    $(".menu").css("width", "5%");
});
$(".box-open").on("click", function ali() {
    $(".a-men").show();
    $("#collapseOne").show();

    $(".container.form").css("width","75%");
    $(".container.form").css("margin-right","19%");
    $(".cople_slide").show();
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
    $("#collapseOne").show();
    $(".zir-majmo").hide();
    $(".fa-angle-down").hide();
    $(".fa-angle-left").show();

});