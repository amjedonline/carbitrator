Router.configure({
    layoutTemplate: 'MasterLayout',
    loadingTemplate: 'Loading',
    notFoundTemplate: 'NotFound'
});

/*
Router.route('/', {
    name: 'home',
    controller: 'HomeController',
    where: 'client'
}); */

Router.route('/', function(){
    this.redirect('/about');
    },{
    name: 'home',
    where: 'client'
});


Router.route('/taxis/create', {
    name: 'createTaxi',
    controller: 'TaxisController',
    action: 'create',
    where: 'client'
});

Router.route('/taxis', {
    name: 'taxisList',
    controller: 'TaxisController',
    action: 'list',
    where: 'client'
});

Router.route('/taxis/location', {where: 'server'})

    .get(function () {
        //var res = this.response;
        const query = this.request.query;
        const lat = query.lat;
        const lon = query.lon;
        const dist = query.dist;
        if (lat == undefined || lon == undefined) {
            const message = "Bad Request";
            this.response.statusCode = 400;
            this.response.end(message);
        }
        const result = Meteor.call('getAvailableTaxisByLocation', lat, lon, dist);
        if (result == null) {
            this.response.statusCode = 404;
            const message = "No taxis found for (" + lat + ", " + lon + ")";
            this.response.end(message);
        } else {
            this.response.statusCode = 200;
            const message = "Found " + result.length + " taxis " + "for (" + lat + ", " + lon + ")";
            console.log(message);
            const json = JSON.stringify(result);
            this.response.end(json);
        }

    });

Router.route('/taxis/:_id', {
    name: 'editTaxi',
    controller: 'TaxisController',
    action: 'edit',
    where: 'client'
});

Router.route('/taxis/activate/:_id', {
    name: 'activateTaxi',
    controller: 'TaxisController',
    action: 'activate',
    where: 'client'
});

Router.route('/taxis/block/:_id', {
    name: 'blockTaxi',
    controller: 'TaxisController',
    action: 'block',
    where: 'client'
});

Router.route('/drivers/create', {
    name: 'createDriver',
    controller: 'DriversController',
    action: 'create',
    where: 'client'
});

Router.route('/drivers', {
    name: 'driversList',
    controller: 'DriversController',
    action: 'list',
    where: 'client'
});

Router.route('/drivers/:_id', {
    name: 'editDriver',
    controller: 'DriversController',
    action: 'edit',
    where: 'client'
});

Router.route('/drivers/deactivate/:_id', {
    name: 'deactivateDriver',
    controller: 'DriversController',
    action: 'deactivate',
    where: 'client'
});

Router.route('/drivers/activate/:_id', {
    name: 'activateDriver',
    controller: 'DriversController',
    action: 'activate',
    where: 'client'
});

Router.route('/drivers/approve/:_id', {
    name: 'approveDriver',
    controller: 'DriversController',
    action: 'approve',
    where: 'client'
});

Router.route('/drivers/mark-for-deletion/:_id', {
    name: 'markForDeletionDriver',
    controller: 'DriversController',
    action: 'markForDeletion',
    where: 'client'
});

Router.route('/fake/adddrivers/:_count', function(){

    Meteor.call('createFakeUsers', this.request.params._count)
});

Router.route('/about', function () {
    this.render('about', {
        data: function () {
            return {'company': 'Alotaksim'}
        }
    });
});
