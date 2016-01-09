Availabilities = new Mongo.Collection('availabilities');


if (Meteor.isServer) {
  Availabilities.allow({
    insert: function (userId, doc) {
      return false;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return false;
    }
  });

  Availabilities.deny({
    insert: function (userId, doc) {
      return false;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return false;
    }
  });
}


LocationSchema = new SimpleSchema({
  "type":{
    type: String,
    allowedValues: ["Point"]
  },
  "coordinates":{
    type: Array,
    minCount: 2,
    maxCount: 2
  },
  "coordinates.$":{
    type: Number,
    decimal: true,
    custom: function(){
      if(!(-90 <= this.value[0] <= 90))
        return "lonOutOfRange" ;
      if(!(-180 <= this.value[1] <= 180))
        return "latOutOfRange" ;
    }

  }
});

LocationSchema.messages = {
  lonOutOfRange: 'Longitude out of range', // Must be between -90 and 90
  latOutOfRange: 'Latitude out of range' // Must be between -180 and 180
}

Availabilities.attachSchema(new SimpleSchema({
  taxi_id: {
    type: String,
    label: "Taxi Id",
    max: 100
  },
  driver_id: {
    type: String,
    label: "Driver Id",
    max: 100
  },
  location : {
    type: LocationSchema,
    label: "Location"
  },
  number: {
    type: String,
    label: "Number",
    max: 100
  },
  manufacturer: {
    type: String,
    label: "Manufacturer",
    allowedValues: ['Audi', 'Mercedes', 'Volkswagen', 'BMW', 'Toyota', 'Citron', 'Suzuki', 'Renault'],
  },
  model: {
    type: String,
    label: "Model",
    max: 100
  },
  bodystyle: {
    type: String,
    label: "Body Style",
    allowedValues: ['Convertibles', 'Coupes', 'Hatchbacks', 'Vans', 'Sedans', 'Suvs', 'Trucks', 'Wagons'],
    optional: true
  },
  colour: {
    type: String,
    label: "Colour",
    optional: true
  }
}));


TabularTables = {};

TabularTables.Taxis = new Tabular.Table({
  name: "Availabilities",
  collection: Availabilities,
  columns: [
    {data: "number", title: "Number"},
    {data: "manufacturer", title: "Manufacturer"},
    {data: "model", title: "Model"},
    {data: "bodystyle", title: "Body style"},
    {data: "colour", title: "Colour"},
    {data: "location", title: "Location"},
    {
      title: "Actions",
      tmpl: Meteor.isClient && Template.AvailabilityActionsCell
    }
  ]
});
