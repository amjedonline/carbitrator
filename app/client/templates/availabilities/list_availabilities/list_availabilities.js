/*****************************************************************************/
/* ListAvailabilities: Event Handlers */
/*****************************************************************************/
Template.ListAvailabilities.events({
    'click .deactivate-driver-button': function () {
        Router.go('/drivers/deactivate/'+this._id);
    },
    'click .deactivate-taxi-button': function () {
        Router.go('/taxis/block/'+this._id);
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
