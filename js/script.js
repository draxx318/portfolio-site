$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$(document).ready(function () {
     $('a[href^="#"]').on('click', function (e) {
         e.preventDefault();

         var target = this.hash,
             $target = $(target);

         $('html, body').stop().animate({
             'scrollTop': $target.offset().top - 80
         }, 900, 'swing', function () {
            // window.location.hash = target;
         });
     });
 });

 function myMap() {
   var myCenter = new google.maps.LatLng(45.2402024,13.5992794);
   var mapCanvas = document.getElementById("map");
   var mapOptions = {center: myCenter, zoom: 10};
   var map = new google.maps.Map(mapCanvas, mapOptions);
   var marker = new google.maps.Marker({position:myCenter});
   marker.setMap(map);
 }
