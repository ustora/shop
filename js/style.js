$(function(){
    // menu fixed
    $(window).scroll(function(event) {
        var menufixed = $('html,body').scrollTop();
        if(menufixed > 200){
            $('.menu').addClass('active-menu');         
        }
        else{
            $('.menu').removeClass('active-menu');      
        }
    });
    // end menu fixed
    $('.back-to-top').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({scrollTop: 0}, 2000);
    });

    $('[data-toggle="tooltip"]').tooltip()
})