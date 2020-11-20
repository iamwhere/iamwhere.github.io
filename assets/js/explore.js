function initialize() {
  var local = {lat: 42.345573, lng: -71.098326};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: local,
    zoom: 1,
    mapTypeControl: false,
    fullscreenControl: false,
  });

  var panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
        position: local,
        pov: {
          heading: 0,
          pitch: 0
        },
        fullscreenControl: false,
      });
  map.setStreetView(panorama);

  panorama.addListener('position_changed', getXY, true);

  function getXY() {
    var getLat = document.getElementById('latValue');
    getLat.firstChild.nodeValue = panorama.getPosition().lat();
    localStorage.setItem('lat', getLat.innerHTML);
    var latitude = parseFloat(localStorage.getItem('lat'))
    document.getElementById('latitude').innerHTML = "LATITUDE:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + latitude.toFixed(6);

    var getLng = document.getElementById('lngValue');
    getLng.firstChild.nodeValue = panorama.getPosition().lng();
    localStorage.setItem('lng', getLng.innerHTML);
    var longitude = parseFloat(localStorage.getItem('lng'))
    document.getElementById('longitude').innerHTML = "LONGITUDE:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + longitude.toFixed(6);
  };
};

function copyLat(){
    var lat = document.createElement("input");
    document.body.appendChild(lat);
    var currentLat = parseFloat(localStorage.getItem('lat'));
    lat.setAttribute('value', currentLat);
    lat.select();
    document.execCommand("copy");
    document.body.removeChild(lat);
};

function copyLng(){
    var lng = document.createElement("input");
    document.body.appendChild(lng);
    var currentLng = parseFloat(localStorage.getItem('lng'));
    lng.setAttribute('value', currentLng);
    lng.select();
    document.execCommand("copy");
    document.body.removeChild(lng);
};
