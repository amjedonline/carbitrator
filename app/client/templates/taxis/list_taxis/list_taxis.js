/*****************************************************************************/
/* ListTaxis: Event Handlers */
/*****************************************************************************/
Template.ListTaxis.events({
});

/*****************************************************************************/
/* ListTaxis: Helpers */
/*****************************************************************************/
Template.ListTaxis.helpers({
    taxis: function() {
        return Taxis.find();
    }
});

/*****************************************************************************/
/* ListTaxis: Lifecycle Hooks */
/*****************************************************************************/
Template.ListTaxis.onCreated(function () {
});

Template.ListTaxis.onRendered(function () {
});

Template.ListTaxis.onDestroyed(function () {
});
