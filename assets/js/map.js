function initMap() {
  const location = { lat: 16.107842, lng: -61.774117 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: location,
    disableDefaultUI: false
  });

  new google.maps.Marker({
    position: location,
    map: map,
    title: "Calypso Bay"
  });
}
