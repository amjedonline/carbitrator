/*****************************************************************************/
/* MapAvailabilities: Event Handlers */
/*****************************************************************************/
Template.MapAvailabilities.events({
});

/*****************************************************************************/
/* MapAvailabilities: Helpers */
/*****************************************************************************/
Template.MapAvailabilities.helpers({
    availabilities: function () {
        return Availabilities.find({});
    },
    myMapOptions: function() {
        // Map initialization options
        return {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
        };
    }
});

/*****************************************************************************/
/* MapAvailabilities: Lifecycle Hooks */
/*****************************************************************************/
Template.MapAvailabilities.onCreated(function () {
});

Template.MapAvailabilities.onRendered(function () {
});

Template.MapAvailabilities.onDestroyed(function () {
});


/*
GoogleMaps.ready('myMap', function(map) {
    // Add a marker to the map once it's ready
    navigator.geolocation.getCurrentPosition(function(location){
        var position = { lat:location.coords.latitude,
            lng:location.coords.longitude };
        var marker = new google.maps.Marker({
            position: position,
            map: map.instance,
            draggable: true,
            animation: google.maps.Animation.DROP
        });
        map.instance.setCenter(new google.maps.LatLng(
            position.lat, position.lng));
    });
    map.instance.setZoom(15);
});
*/
GoogleMaps.ready('myMap', function(map) {
    console.log(" here is the providers");
    var availabilities = availabilities.fetch();
    _.each(availabilities, function(availability){
        coords = availability.location.coordinates;
        var position = { lat:coordinates[0],
            lng:coordinates[1] };
        console.log(position);
        var provider = new google.maps.Marker({ position:position, map: map.instance, animation:google.maps.Animation.DROP});
        console.log(provider)
        map.instance.setZoom(13);
    });
});