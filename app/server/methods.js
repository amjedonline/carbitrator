/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

const DIST_IN_M = 5000;


Meteor.methods({
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
    "pumpFakeData": function(count){
        if(count < 1 || count > 1000){
            throw new Meteor.Error('invalid-fake-driver-count', "Can create fake between 1 and 100 fake drivers only.");
        }
        console.log('Populating some fake data.');
        while(--count > 0) {

           Drivers.insert(create_fake_driver());
           Taxis.insert(create_fake_taxi());


        }
    }
});
