const mock = [
  {
    id: "123",
    count: 9,
    name: "hang out",
    uid: "321"
  },
  {
    id: "234",
    count: 6,
    name: "dinner",
    uid: "321"
  },
  {
    id: "345",
    count: 1,
    name: "spaghetti",
    uid: "321"
  },
  {
    id: "456",
    count: 3,
    name: "drinks",
    uid: "321"
  },
  {
    id: "567",
    count: 2,
    name: "videogames",
    uid: "321"
  },
  {
    id: "678",
    count: 2,
    name: "play games",
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
    setTimeout(
      () => resolve({ ...activity, id: `${new Date().getTime()}` }),
      250
    );
  });
}

export function incrementActivityCount(id) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(id), 250);
  });
}

export function decrementActivityCount(id) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(id), 250);
  });
}

export function deleteActivity(activity) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(activity), 250);
  });
}
