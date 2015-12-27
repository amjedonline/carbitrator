
Meteor.publish('taxis', function () {
  return Taxis.find();
});

Meteor.publish('drivers', function () {
  return Drivers.find();
});