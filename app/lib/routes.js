Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
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

Router.route('/taxis/:_id', {
  name: 'editTaxi',
  controller: 'TaxisController',
  action: 'edit',
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