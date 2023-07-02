$(document).ready(function () {
    $("#show").click(function () {
        $("#showme").toggle();
    });
});


if ($('.carsoul ').length > 0) {
    $('.carsoul').owlCarousel({
        margin: 15,
        ltr: true,
        center: false,
        nav: true,
        dots: true,
        autoWidth: true,
        items: 4,
        navText: [
            "<i class='fa-solid fa-chevron-right'></i>",
            "<i class='fa-solid fa-chevron-left'></i>",

        ],

    });
}