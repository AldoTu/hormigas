$(document).ready(function(){

  initMap();

});

function initMap() {
  var uluru = {lat: 19.5953051, lng: -99.22763479999998};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    streetViewControl: false,
    center: uluru});
  var marker = new google.maps.Marker({
    position: uluru,
    map: map});
}
