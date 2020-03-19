const mock = {
  name: "David Hartsough"
};

export function fetchProfile() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(mock), 444);
  });
}
