Taxis = new Mongo.Collection('taxis');


if (Meteor.isServer) {
  Taxis.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });

  Taxis.deny({
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

Location = new SimpleSchema({
  lon: {
    type: Number,
    label: "Longitude",
    min: -180,
    max: 180
  },
  lat: {
    type: Number,
    label: "Latitude",
    min: -90,
    max: 90
  }
});

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


TaxiSchema = new SimpleSchema({
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
  power: {
    type: Number,
    label: "Power (HP)",
    optional: true
  },
  colour: {
    type: String,
    label: "Colour",
    optional: true
  },
  capacity: {
    type: Number,
    label: "Taxi capacity",
    optional: true
  },
  maximumluggage: {
    type: Number,
    label: "Maximum luggage (KG)",
    optional: true
  },
  motorexpiry: {
    type: String,
    label: "Motor expiry date",
    optional: true
  },
  insurancenumber: {
    type: String,
    label: "Insurance Number",
    optional: true
  },
  insuranceexpirydate: {
    type: String,
    label: "Insurance expiry date",
    optional: true
  },
  pcolicensenumber: {
    type: String,
    label: "PCO License number",
    optional: true
  },
  pcolicenseexpirydate: {
    type: String,
    label: "PCO License expiry date",
        optional: true
    },
  status: {
    type: String,
    label: "Status",
    allowedValues: ['Online', 'Offline', 'Blocked']
    },
  location : {
      type: LocationSchema,
      label: "Location"
  }
});

TabularTables = {};

TabularTables.Taxis = new Tabular.Table({
  name: "Taxis",
  collection: Taxis,
  columns: [
    {data: "number", title: "Number"},
    {data: "manufacturer", title: "Manufacturer"},
    {data: "model", title: "Model"},
    {data: "status", title: "Status"},
    {
      data: "funfactor",
      title: "Fun factor",
      render: function (val, type, doc) {
        if (type === 'bodystyle' && val === 'Coupes') {
          return "5";
        } else {
          return "3";
        }
      }
    },
    {
      title: "Actions",
      tmpl: Meteor.isClient && Template.TaxiActionsCell
    }
  ]
});

Taxis.attachSchema(TaxiSchema);

