const mockMoment = {
  id: "123abc",
  uid: "321",
  date: "2019-11-23",
  activities: ["hang out"],
  people: ["Jared Guttromson", "Diego Casillas", "William Bigirimana", "Yves"],
  places: ["BSU"]
};
const mockMoments = [
  {
    id: "abc123abc",
    uid: "321",
    date: "2019-11-23",
    activities: ["hang out"],
    people: [
      "Jared Guttromson",
      "Diego Casillas",
      "William Bigirimana",
      "Yves"
    ],
    places: ["BSU"]
  },
  {
    id: "bc123abc",
    uid: "321",
    date: "2019-11-23",
    activities: ["hang out", "dinner", "spaghetti"],
    people: [
      "Steven Stevenson",
      "Peter Peterson",
      "Will Williamson",
      "John Johnson"
    ],
    places: ["Hyde Perk", "Denny's", "Old Chicago"]
  },
  {
    id: "c123abc",
    uid: "321",
    date: "2019-11-27",
    activities: [
      "hang out",
      "dinner",
      "spaghetti",
      "drinks",
      "videogames",
      "play games"
    ],
    people: [
      "Steven Stevenson",
      "Peter Peterson",
      "Will Williamson",
      "John Johnson"
    ],
    places: [
      "Hyde Perk",
      "Denny's",
      "Old Chicago",
      "The Big Cool House with the Red Door"
    ]
  }
];
const mockMomentTwo = {
  id: "321xyz",
  uid: "321",
  date: "2019-11-24",
  activities: ["happy hour"],
  people: ["Wai-man Fung", "Diego Casillas", "William Bigirimana"],
  places: ["Old Chicago"]
};
const mockMomentThree = {
  id: "456xyz",
  uid: "321",
  date: "2019-11-20",
  activities: ["hang out"],
  people: ["Jake Albers", "Kyler Daron", "Wai-man Fung"],
  places: ["Wai-man Fung's house"]
};

export function fetchMomentsByMonth(month) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(mockMoments), 250);
  });
}

export function fetchMomentsByQuery(query, type) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve([mockMomentTwo, mockMomentThree]), 250);
  });
}

export function createMoment(created) {
  return new Promise(function(resolve, reject) {
    setTimeout(
      () => resolve({ ...created, id: `newnew${new Date().getTime()}` }),
      250
    );
  });
}

export function updateMoment(updated) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(updated), 250);
  });
}

export function deleteMoment(deleted) {
  return new Promise(function(resolve, reject) {
    console.log("DELEET");
    setTimeout(() => resolve(deleted), 250);
  });
}

export function getMoment(id) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(mockMoment), 250);
  });
}
