/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

const DIST_IN_M = 5000;


Meteor.methods({
    'server/method_name': function () {
        // server method logic
    },

    "getAvailableTaxisByLocation": function (lat, lon, dist) {
        if (dist == undefined) {
            dist = DIST_IN_M;
        }
        console.log("Finding taxis nearby: pos(" + lat + ", " + lon + ")");
        const result = Taxis.find({
            location: {
                $near: {
                    $geometry: {type: "Point", "coordinates": [parseFloat(lon), parseFloat(lat)]},
                    $maxDistance: parseInt(dist)
                }
            }
        }).fetch();


        if (result == null) {
            console.log("No taxis found for (" + lat + ", " + lon + ")");
            return null;
        }

        console.log("Found " + result.length + " taxis " + "for (" + lat + ", " + lon + ")");
        return result;
    },
    "createFakeDrivers": function(count){
        if(count < 1 || count > 1000){
            throw new Meteor.Error('invalida-fake-driver-count', "Can create fake between 1 and 100 fake drivers.");
        }
        console.log('Populating fake data.');
        while(--count > 0) {

           Drivers.insert(create_fake_driver());
           Taxis.insert(create_fake_taxi());


        }
    }
});
