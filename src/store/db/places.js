const mock = [
  {
    id: "123",
    count: 3,
    name: "abcfgh",
    uid: "321"
  },
  {
    id: "234",
    count: 8,
    name: "xyzfgh",
    uid: "321"
  },
  {
    id: "345",
    count: 9,
    name: "jkl",
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
    setTimeout(() => resolve(place), 250);
  });
}

export function updatePlace(place) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(place), 250);
  });
}

export function deletePlace(place) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(place), 250);
  });
}
