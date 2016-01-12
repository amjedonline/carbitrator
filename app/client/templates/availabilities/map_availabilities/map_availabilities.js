/*****************************************************************************/
/* MapAvailabilities: Event Handlers */
/*****************************************************************************/

Meteor.startup(function() {
    GoogleMaps.load();
});


Template.MapAvailabilities.events({
});

/*****************************************************************************/
/* MapAvailabilities: Helpers */
/*****************************************************************************/

Template.MapAvailabilities.helpers({
    availabilities: function () {
        return Availabilities.find({});
    },
    availabilitiesMapOptions: function() {
        // Make sure the maps API has loaded
        if (GoogleMaps.loaded()) {
            // Map initialization options
            return {
                center: new google.maps.LatLng(-37.8136, 144.9631),
                zoom: 13
            };
        }
    }
});

/*****************************************************************************/
/* MapAvailabilities: Lifecycle Hooks */
/*****************************************************************************/
Template.MapAvailabilities.onCreated(function () {
});

Template.MapAvailabilities.onRendered(function () {
    GoogleMaps.load();
});

Template.MapAvailabilities.onDestroyed(function () {
});

Template.body.onCreated(function(){
    GoogleMaps.ready('availabilitiesMap', function(map) {
        // Add a marker to the map once it's ready
   /*     var marker = new google.maps.Marker({
            position: map.options.center,
            map: map.instance
        });*/
        var availabilities = availabilities.fetch();
        _.each(availabilities, function(availability){
            coords = availability.location.coordinates;
            var position = {
                lat:coordinates[0],
                lng:coordinates[1]
            };
            console.log(position);
            var provider = new google.maps.Marker({
                position: position,
                map: map.instance,
                animation: google.maps.Animation.DROP
            });
            map.instance.setZoom(13);
        });
    });
});