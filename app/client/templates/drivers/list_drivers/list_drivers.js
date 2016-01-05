/*****************************************************************************/
/* ListDrivers: Event Handlers */
/*****************************************************************************/

Template.DriverActionsCell.events({
    'click .edit-driver-button': function () {
        Router.go('/drivers/'+this._id);
    },
    'click .deactivate-driver-button': function () {
        Router.go('/drivers/deactivate/'+this._id);
    },
    'click .activate-driver-button': function () {
        Router.go('/drivers/activate/'+this._id);
    },
    'click .approve-driver-button': function () {
        Router.go('/drivers/approve/'+this._id);
    },
    'click .delete-driver-button': function () {
        Router.go('/drivers/delete/'+this._id);
    },
    'click .mark-for-deletion-driver-button': function () {
        Router.go('/drivers/mark-for-deletion/'+this._id);
    }
});

Template.DriverActionsCell.helpers({
    statusIs: function(status) {
        return this.status === status;
    },
    statusIsOr: function(status1, status2) {
        return this.status === status || this.status === '';
    }
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