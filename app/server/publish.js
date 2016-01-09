
Meteor.publish('taxis', function () {
  return Taxis.find();
});

Meteor.publish('drivers', function () {
  return Drivers.find();
});

Meteor.publish('availabilities', function () {
  return Availabilities.find();
});