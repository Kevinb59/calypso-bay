function initMap() {
  const location = { lat: 16.1520569, lng: -61.7687748 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: location,
    disableDefaultUI: false,
    mapTypeControl: true,
    streetViewControl: true
  });

  new google.maps.Marker({
    position: location,
    map: map,
    title: "Calypso Bay",
    animation: google.maps.Animation.DROP
  });
}
