/*****************************************************************************/
/* ListDrivers: Event Handlers */
/*****************************************************************************/
Template.ListDrivers.events({
});

/*****************************************************************************/
/* ListDrivers: Helpers */
/*****************************************************************************/
Template.ListDrivers.helpers({
    drivers: function() {
        return Drivers.find();
    }
});

/*****************************************************************************/
/* ListDrivers: Lifecycle Hooks */
/*****************************************************************************/
Template.ListDrivers.onCreated(function () {
});

Template.ListDrivers.onRendered(function () {
});

Template.ListDrivers.onDestroyed(function () {
});
