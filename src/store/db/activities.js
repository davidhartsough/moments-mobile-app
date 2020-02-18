const mock = [
  {
    id: "123",
    count: 1,
    name: "abc",
    uid: "321"
  },
  {
    id: "234",
    count: 4,
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

export function fetchActivities() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(mock), 250);
  });
}

export function createActivity(activity) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(activity), 250);
  });
}

export function updateActivity(activity) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(activity), 250);
  });
}

export function deleteActivity(activity) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(activity), 250);
  });
}
