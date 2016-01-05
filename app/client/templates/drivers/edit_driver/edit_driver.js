/*****************************************************************************/
/* EditDriver: Event Handlers */
/*****************************************************************************/
Template.EditDriver.events({
    'click .check-out': function () {
        addBookToCheckoutCart(this._id);
    }
});

/*****************************************************************************/
/* EditDriver: Helpers */
/*****************************************************************************/
Template.EditDriver.helpers({
});

/*****************************************************************************/
/* EditDriver: Lifecycle Hooks */
/*****************************************************************************/
Template.EditDriver.onCreated(function () {
});

Template.EditDriver.onRendered(function () {
});

Template.EditDriver.onDestroyed(function () {
});
