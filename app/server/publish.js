
Meteor.publish('taxis', function () {
  return Taxis.find();
});