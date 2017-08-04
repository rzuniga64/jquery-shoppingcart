$(document).ready(function () {

    var shopcart = [];

    $(".productitem").click(function (e) {
        e.preventDefault();

        var iteminfo = $(this.dataset)[0];
        iteminfo.qty = 1;

        shopcart.push(iteminfo);
        console.log(shopcart);
    });
});