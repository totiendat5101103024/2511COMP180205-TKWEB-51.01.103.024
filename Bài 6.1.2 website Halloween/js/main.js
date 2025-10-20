$(document).ready(function(){
    $('.product-header').click(function(){
        let details = $(this).next('.product-details');
        $('.product-details').not(details).slideUp();
        details.slideToggle();
    });
});