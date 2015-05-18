$(document).ready(function(){
$('.clearfix li').click(function(e){
    e.preventDefault();
    if($(this).hasClass('current-menu-item')){
    $(this).removeClass('current-menu-item');
        }else{
        $('.clearfix li').removeClass('current-menu-item');
        $(this).addClass('current-menu-item');
}
});
    $(".clearfix li").hover(function () {
     $(this).find('.sub-menu').fadeToggle('100');
    });

   
$('#mobile-button').click(function(e){
        e.preventDefault();
        $('#menu-container').show();
        $('#mobile-button').hide();
        $('#mobile-close').show();
});
$('#mobile-close').click(function(e){
        e.preventDefault();
        $('#menu-container').hide();
        $('#mobile-button').show();
        $('#mobile-close').hide();
});

})
