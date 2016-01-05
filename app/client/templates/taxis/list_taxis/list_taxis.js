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


/*****************************************************************************/
/* TaxiActionsCell: Event Handlers, helpers and everything else.*/
/*****************************************************************************/


Template.TaxiActionsCell.events({
    'click .edit-taxi-button': function () {
        Router.go('/taxis/'+this._id);
    },
    'click .activate-taxi-button': function () {
        Router.go('/taxis/activate/'+this._id);
    },
    'click .block-taxi-button': function () {
        Router.go('/taxis/block/'+this._id);
    }
});

Template.TaxiActionsCell.helpers({
    statusIs: function(status) {
        return this.status === status;
    },
    statusIsOr: function(status1, status2) {
        return this.status === status || this.status === '';
    }
});
