/*****************************************************************************/
/* EditTaxi: Event Handlers */
/*****************************************************************************/
Template.EditTaxi.events({
});

/*****************************************************************************/
/* EditTaxi: Helpers */
/*****************************************************************************/
Template.EditTaxi.helpers({
    beforeRemove: function () {
        return function (collection, id) {
            var doc = collection.findOne(id);
            if (confirm('Really delete car: "' + doc.brand + " " + doc.model + '"?')) {
                this.remove();
                Router.go('carsList');
            }
        };
    }
});

/*****************************************************************************/
/* EditTaxi: Lifecycle Hooks */
/*****************************************************************************/
Template.EditTaxi.onCreated(function () {
});

Template.EditTaxi.onRendered(function () {
});

Template.EditTaxi.onDestroyed(function () {
});
