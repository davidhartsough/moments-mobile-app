const mockMoment = {
  id: "123abc",
  uid: "mHZcKLy864ZeRxuaXBfD3RI7Ugm1",
  date: "2019-11-23",
  activities: ["hang out"],
  people: ["Jared Guttromson", "Diego Casillas", "William Bigirimana", "Yves"],
  places: ["BSU"]
};
const mockMomentTwo = {
  id: "321xyz",
  uid: "mSDcKLy864ZeRxuaXBfD3RI7Ugm1",
  date: "2019-11-24",
  activities: ["happy hour"],
  people: ["Wai-man Fung", "Diego Casillas", "William Bigirimana"],
  places: ["Old Chicago"]
};

export function fetchMomentsByMonth(month) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve([mockMoment]), 250);
  });
}

export function fetchMomentsByQuery(query, type) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve([mockMomentTwo]), 250);
  });
}

export function createMoment(created) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve({ ...created, id: "asdf4567" }), 250);
  });
}

export function updateMoment(updated) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(updated), 250);
  });
}

export function deleteMoment(deleted) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(deleted), 250);
  });
}
