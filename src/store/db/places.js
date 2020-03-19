const mock = [
  {
    id: "123",
    count: 3,
    name: "Old Chicago",
    uid: "321"
  },
  {
    id: "234",
    count: 8,
    name: "Flying M",
    uid: "321"
  },
  {
    id: "345",
    count: 9,
    name: "Arcadia house",
    uid: "321"
  },
  {
    id: "456",
    count: 10,
    name: "Hyde Perk",
    uid: "321"
  },
  {
    id: "567",
    count: 3,
    name: "Alicia's house",
    uid: "321"
  },
  {
    id: "678",
    count: 3,
    name: "The Big Cool House with the Red Door",
    uid: "321"
  },
  {
    id: "789",
    count: 3,
    name: "BSU",
    uid: "321"
  },
  {
    id: "890",
    count: 3,
    name: "Denny's",
    uid: "321"
  },
  {
    id: "901",
    count: 3,
    name: "Wai-man Fung's house",
    uid: "321"
  }
];

export function fetchPlaces() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(mock), 250);
  });
}

export function createPlace(place) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve({ ...place, id: `${new Date().getTime()}` }), 250);
  });
}

export function incrementPlaceCount(id) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(id), 250);
  });
}

export function decrementPlaceCount(id) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(id), 250);
  });
}

export function deletePlace(place) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(place), 250);
  });
}
