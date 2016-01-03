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
    }
});
