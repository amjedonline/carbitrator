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

Taxis.attachSchema(new SimpleSchema({
  number: {
    type: String,
    label: "Number",
    max: 100
  },
  manufacturer: {
    type: String,
    label: "Manufacturer",
    allowedValues: ['Audi', 'Mercedez', 'Volkswagen', 'BMW', 'Toyota', 'Citron', 'Suzuki', 'Renault'],
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
  }
}));

TabularTables = {};

TabularTables.Taxis = new Tabular.Table({
  name: "Taxis",
  collection: Taxis,
  columns: [
    {data: "number", title: "Number"},
    {data: "manufacturer", title: "Manufacturer"},
    {data: "model", title: "Model"},
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
    {data: "summary", title: "Summary"},
    {
      tmpl: Meteor.isClient && Template.bookCheckOutCell
    }
  ]
});