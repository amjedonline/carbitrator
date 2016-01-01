
if (Taxis.find().count() === 0) {

    var taxi = {
        number: 'B-TL-1234',
        manufacturer: 'Audi',
        model: '100',
        status: 'Online',
        location: { type: "Point", coordinates: [13.386769, 52.468612] }
    };

    Taxis.insert(taxi);
}