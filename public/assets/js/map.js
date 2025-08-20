function initMap() {
  const location = { lat: 16.1520569, lng: -61.7687748 }

  const styledMap = new google.maps.StyledMapType(
    [
      {
        featureType: 'poi',
        stylers: [{ visibility: 'off' }]
      }
    ],
    { name: 'Sans POI' }
  )

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: location,
    disableDefaultUI: false,
    mapTypeControl: true, // ⛔ Plan/Satellite supprimé
    streetViewControl: false
  })

  map.mapTypes.set('styled_map', styledMap)
  map.setMapTypeId('styled_map')

  new google.maps.Marker({
    position: location,
    map: map,
    title: 'Calypso Bay',
    animation: google.maps.Animation.DROP
  })
}
