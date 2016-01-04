
rand_ddmmyyyy = function () {
    return _.random(1, 28) + '/' + _.random(1, 12) + '/' + _.random(1970, 1990);
}

rand_future = function () {
    return _.random(1, 28) + '/' + _.random(1, 12) + '/' + _.random(2020, 2030);
}

create_fake_taxi = function (){
    //41°00′49″N 28°57′18″E
    var lat = 41.00 + _.random(0.0001, 0.0099);
    var lon = 28.00 + _.random(0.5718, 0.5799);
    var location = { type: "Point", coordinates: [lat, lon] };

    var data = {
        number: _.random(2345, 9876),
        manufacturer: Fake.fromArray(['Audi', 'Mercedes', 'Volkswagen', 'BMW', 'Toyota', 'Citron', 'Suzuki', 'Renault']),
        model: Fake.fromArray(['Model X', 'Type 2', 'Super sonic', 'Crossroads', 'Tough terrain']),
        bodystyle: Fake.fromArray(['Convertibles', 'Coupes', 'Hatchbacks', 'Vans', 'Sedans', 'Suvs', 'Trucks', 'Wagons']),
        power: _.random(120,300),
        colour:Fake.fromArray(['Black', 'White', 'Silver', 'Blue']),
        capacity: Fake.fromArray([4, 5]),
        maximumluggage: Fake.fromArray([200,350,500,800]),
        motorexpiry: rand_future(),
        insurancenumber: _.random(387654387, 876543897),
        pcolicensenumber: _.random(387654387, 876543897),
        pcolicenseexpirydate: rand_future(),
        status: Fake.fromArray(['Online', 'Offline', 'Blocked']),
        location: location
    };

    return data;
}

create_fake_driver = function (){
    var user = Fake.user({fields: ['name', 'email', 'surname']});
    var city_state = Fake.fromArray(['Izmir', 'Istanbul', 'Ankara', 'Antalia', 'Sivas'], 'Konya', 'Bolu');
    var data = {
        fname: user.name,
        lname: user.surname,
        email: user.email,
        password: Fake.word(),
        gender: Fake.fromArray(['Male', 'Female', 'Unspecified']),
        dob: rand_ddmmyyyy(),
        mobile: _.random(1512345678, 1798274698),
        licensenumber: _.random(1512345678, 1798274698),
        licenseexpirydate: rand_ddmmyyyy(),
        pcolicensenumber: _.random(1512345678, 1798274698),
        pcolicenseexpirydate: rand_ddmmyyyy(),
        insurancenumber: _.random(1512345678, 1798274698),
        insuranceexpirydate: rand_ddmmyyyy(),
        country: 'Turkey',
        state: city_state,
        city: city_state,
        addressline1: 'No ' + _.random(1, 50),
        addressline2: 'Address line 2',
        postal: _.random(01000, 99999)
    };
    return data;
}