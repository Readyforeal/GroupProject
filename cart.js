$(document).ready(function(){

    var total = 0;
    var tax = 0.07;
    var totalAfterTax;

    if(localStorage.getItem('button-1') === 'clicked'){
        total += parseFloat(localStorage.getItem('item-1-price'));
        $("#cart-item-1").removeClass("d-none");
        $("#cart-item-1").addClass("d-flex");

        UpdatePrice();
    }

    if(localStorage.getItem('button-2') === 'clicked'){
        total += parseFloat(localStorage.getItem('item-2-price'));
        $("#cart-item-2").removeClass("d-none");
        $("#cart-item-2").addClass("d-flex");

        UpdatePrice();
    }

    if(localStorage.getItem('button-3') === 'clicked'){
        total += parseFloat(localStorage.getItem('item-3-price'));
        $("#cart-item-3").removeClass("d-none");
        $("#cart-item-3").addClass("d-flex");

        UpdatePrice();
    }

    $("#remove-item-1").on("click", function(){
        $("#cart-item-1").addClass("d-none");
        $("#cart-item-1").removeClass("d-flex");
        localStorage.removeItem('button-1');

        total -= parseFloat(localStorage.getItem('item-1-price'));
        localStorage.removeItem('item-1-price');

        UpdatePrice();
    });

    $("#remove-item-2").on("click", function(){
        $("#cart-item-2").addClass("d-none");
        $("#cart-item-2").removeClass("d-flex");
        localStorage.removeItem('button-2');

        total -= parseFloat(localStorage.getItem('item-2-price'));
        localStorage.removeItem('item-2-price');

        UpdatePrice();
    });

    $("#remove-item-3").on("click", function(){
        $("#cart-item-3").addClass("d-none");
        $("#cart-item-3").removeClass("d-flex");
        localStorage.removeItem('button-3');

        total -= parseFloat(localStorage.getItem('item-3-price'));
        localStorage.removeItem('item-3-price');

        UpdatePrice();
    });

    function UpdatePrice(){

        var newTax = total * tax;
        var finalTotal = total + newTax;

        document.getElementById("cart-total").innerHTML = "Total: $" + total;
        document.getElementById("cart-tax").innerHTML = "Tax: $" + total * tax;
        document.getElementById("cart-final-total").innerHTML = "Total: $" + finalTotal;
    }

    $("#buy-button").on("click", function(){
        alert("Thank you for your purchase! We already know your card info & where you live.");

        localStorage.removeItem('button-1');
        localStorage.removeItem('button-2');
        localStorage.removeItem('button-3');

        localStorage.removeItem('item-1-price');
        localStorage.removeItem('item-2-price');
        localStorage.removeItem('item-3-price');

        window.location.href = "index.html";
    });

});