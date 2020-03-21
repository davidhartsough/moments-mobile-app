const mock = {
  uid: "321",
  name: "David Hartsough",
  email: "hartsoughdavid@gmail.com"
};

export function fetchProfile() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(mock), 444);
  });
}
