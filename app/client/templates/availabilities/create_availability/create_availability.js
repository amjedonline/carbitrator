
/*****************************************************************************/
/* CreateAvailability: Event Handlers */
/*****************************************************************************/
/*
Template.CreateAvailability.events({
    'click #drivers': function(e) {
        e.preventDefault();
        $('#driversModal').modal('show');
    }
});
*/

/*****************************************************************************/
/* CreateAvailability: Helpers */
/*****************************************************************************/
Template.CreateAvailability.helpers({
    drivers:function(){
        return Drivers.find().fetch().map(function(it){
            it['value'] = [it.fname, it.lname, it.email, it.licensenumber].join(' ');
            return it;

        });
    },
    select: function(e){
        console.log('selected');
    }
});


/*****************************************************************************/
/* CreateAvailability: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateAvailability.onCreated(function () {
});

Template.CreateAvailability.onRendered(function () {
    Meteor.typeahead.inject();
    console.log('Registered typeahead');
});

Template.CreateAvailability.onDestroyed(function () {
});

