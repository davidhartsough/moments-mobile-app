const mock = [
  {
    id: "123",
    count: 2,
    name: "abcjkl",
    uid: "321"
  },
  {
    id: "234",
    count: 5,
    name: "xyz",
    uid: "321"
  },
  {
    id: "345",
    count: 7,
    name: "jkl",
    uid: "321"
  }
];

export function fetchPeople() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(mock), 250);
  });
}

export function createPerson(person) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(person), 250);
  });
}

export function updatePerson(person) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(person), 250);
  });
}

export function deletePerson(person) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(person), 250);
  });
}
