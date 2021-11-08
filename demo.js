$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");  
        }
    });
    $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
    });

    $('#aclick').click(function() {
        $('.navbar .menu').removeClass("active");
          $('.menu-btn i').removeClass("active");
    });
    $('#hclick').click(function() {
        $('.navbar .menu').removeClass("active");
          $('.menu-btn i').removeClass("active");
    });
    $('#eclick').click(function() {
        $('.navbar .menu').removeClass("active");
          $('.menu-btn i').removeClass("active");
    });
    $('#sclick').click(function() {
        $('.navbar .menu').removeClass("active");
          $('.menu-btn i').removeClass("active");
    });
    $('#cclick').click(function() {
        $('.navbar .menu').removeClass("active");
          $('.menu-btn i').removeClass("active");
    });
});




