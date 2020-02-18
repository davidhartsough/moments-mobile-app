export function fetchAuth() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(false), 444);
  });
}

export function logIn() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(), 444);
  });
}

export function logOut() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(), 444);
  });
}
