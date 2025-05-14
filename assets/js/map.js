function initMap() {
  const location = { lat: 16.108471, lng: -61.776106 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: location,
    disableDefaultUI: false
  });

  new google.maps.Marker({
    position: location,
    map: map,
    title: "Calypso Bay"
  });
}
