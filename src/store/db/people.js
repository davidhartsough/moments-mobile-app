const mock = [
  {
    id: "123",
    count: 2,
    name: "Jacob West",
    uid: "321"
  },
  {
    id: "234",
    count: 5,
    name: "Stevie Wonder",
    uid: "321"
  },
  {
    id: "345",
    count: 7,
    name: "Jesse Jackson",
    uid: "321"
  },
  {
    id: "456",
    count: 17,
    name: "Alicia Keys",
    uid: "321"
  },
  {
    id: "567",
    count: 2,
    name: "Jennifer Martell",
    uid: "321"
  },
  {
    id: "n1234",
    count: 2,
    name: "Jared Guttromson",
    uid: "321"
  },
  {
    id: "n2345",
    count: 2,
    name: "Diego Casillas",
    uid: "321"
  },
  {
    id: "n3456",
    count: 2,
    name: "William Bigirimana",
    uid: "321"
  },
  {
    id: "n4567",
    count: 2,
    name: "Yves",
    uid: "321"
  },
  {
    id: "g1234",
    count: 2,
    name: "Steven Stevenson",
    uid: "321"
  },
  {
    id: "g2345",
    count: 2,
    name: "Peter Peterson",
    uid: "321"
  },
  {
    id: "g3456",
    count: 2,
    name: "Will Williamson",
    uid: "321"
  },
  {
    id: "g4567",
    count: 2,
    name: "John Johnson",
    uid: "321"
  },
  {
    id: "h3456",
    count: 2,
    name: "Wai-man Fung",
    uid: "321"
  },
  {
    id: "h1234",
    count: 2,
    name: "Kyler Daron",
    uid: "321"
  },
  {
    id: "h2345",
    count: 2,
    name: "Jake Albers",
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
    setTimeout(
      () => resolve({ ...person, id: `${new Date().getTime()}` }),
      250
    );
  });
}

export function incrementPersonCount(id) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(id), 250);
  });
}

export function decrementPersonCount(id) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(id), 250);
  });
}

export function deletePerson(person) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(person), 250);
  });
}
