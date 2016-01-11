/*****************************************************************************/
/* ListAvailabilities: Event Handlers */
/*****************************************************************************/
Template.ListAvailabilities.events({
    'click .remove-availability-button': function () {
        Router.go('/availabilities/remove/'+this._id);
    }
});

/*****************************************************************************/
/* ListAvailabilities: Helpers */
/*****************************************************************************/
Template.ListAvailabilities.helpers({
    availabilities: function() {
        return Availabilities.find();
    }
});

/*****************************************************************************/
/* ListAvailabilities: Lifecycle Hooks */
/*****************************************************************************/
Template.ListAvailabilities.onCreated(function () {
});

Template.ListAvailabilities.onRendered(function () {
});

Template.ListAvailabilities.onDestroyed(function () {
});
