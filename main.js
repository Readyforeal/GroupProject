$(document).ready(function(){

    $("#item-1-button").on("click", function(){
        localStorage.setItem('button-1', 'clicked');
        localStorage.setItem('item-1-price', '279');
        window.location.href = "cart.html";
    });

    $("#item-2-button").on("click", function(){
        localStorage.setItem('button-2', 'clicked');
        localStorage.setItem('item-2-price', '249');
        window.location.href = "cart.html";
    });

    $("#item-3-button").on("click", function(){
        localStorage.setItem('button-3', 'clicked');
        localStorage.setItem('item-3-price', '119');
        window.location.href = "cart.html";
    });

});