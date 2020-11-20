var url_string = (window.location.href);
var url = new URL(url_string);
var lat = parseFloat(url.searchParams.get("lat"));
var lng = parseFloat(url.searchParams.get("lng"));
var rnd = parseFloat(url.searchParams.get("round"));

document.getElementById("round").innerHTML = "Round " + rnd;
document.title = "location estimator - " + rnd;

var speed = 0.075;
var bin = 1;

function initialize() {
  var local = {lat: lat, lng: lng};

  var panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
        position: local,
        zoom: 0.25,
        pov: {
          heading: 0,
          pitch: 0
        },
        addressControl: false,
        showRoadLabels: false,
        linksControl: false,
        zoomControl: false,
        fullscreenControl: false,
        disableDefaultUI: true,
        clickToGo: false,
      });

  if (bin == 1) {
    window.setInterval(function() {
      var pov = panorama.getPov();
      pov.heading += speed; // 0.075
      panorama.setPov(pov);
    },10);
  };
}
