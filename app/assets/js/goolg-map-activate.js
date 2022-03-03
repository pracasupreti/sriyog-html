
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: new google.maps.LatLng(23.3066719, 90.3607784),
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: false,
        zoomControl: false,
        disableDefaultUI: false,
        styles: [
            {
                elementType: 'labels',
                stylers: [{
                    visibility: 'off'
                }]
            },
            {
                elementType: 'geometry',
                stylers: [{
                    color: '#EDEDED'
                }]
            }, 
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#F7F7F7'
                }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{
                    color: '#F7F7F7'
                }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{
                    color: '#F7F7F7'
                }]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#F7F7F7'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{
                    color: '#F7F7F7'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#F7F7F7'
                }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{
                    color: '#F7F7F7'
                }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#F7F7F7'
                }]
            }
        ]
        //mapTypeId: google.maps.MapTypeId.ROADMAP
    });



    
  
}

