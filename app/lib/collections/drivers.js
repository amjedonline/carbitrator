Drivers = new Mongo.Collection('drivers');


if (Meteor.isServer) {
  Drivers.allow({
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

  Drivers.deny({
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




Drivers.attachSchema(new SimpleSchema({
  fname: {
    type: String,
    label: "First name",
    max: 100
  },
  lname: {
    type: String,
    label: "Last name",
    max: 100
  },
  email: {
    type: String,
    label: "Email",
    max: 100
  },
  password: {
    type: String,
    label: "Password",
    optional: false
  },
  gender: {
    type: String,
    label: "Gender",
    allowedValues: ['Male', 'Female', 'Unspecified'],
    optional: true
  },
  dob: {
    type: String,
    label: "Date of birth",
    optional: true
  },
  mobile: {
    type: String,
    label: "Mobile number",
    optional: true
  },
  licensenumber: {
    type: String,
    label: "Driver license number",
    optional: true
  },
  licenseexpirydate: {
    type: String,
    label: "License expiry date",
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
  status: {
    type: String,
    label: "status",
    allowedValues: ['PendingApproval', 'Deactivated', 'Active', 'PendingDelete'],
    optional: true
  },
  country: {
    type: String,
    label: "Country",
    optional: true
  },
  state: {
    type: String,
    label: "state",
    optional: true
  },
  city: {
    type: String,
    label: "City",
    optional: true
  },
  addressline1: {
    type: String,
    label: "Address line 1",
    optional: true
  },
  addressline2: {
    type: String,
    label: "Address line 2",
    optional: true
  },
  postal: {
    type: String,
    label: "Postal code",
    optional: true
  }
}));


TabularTables = {};

TabularTables.Drivers = new Tabular.Table({
  name: "Drivers",
  collection: Drivers,
  columns: [
    {data: "fname", title: "First name"},
    {data: "lname", title: "Last name"},
    {data: "email", title: "Email"},
    {data: "mobile", title: "Mobile"},
    {data: "licensenumber", title: "License no"},
    {data: "insurancenumber", title: "Insurance number"},
    {data: "status", title: "Status"},
    {
      title: "Actions",
      tmpl: Meteor.isClient && Template.DriverActionsCell
    }
  ]
});