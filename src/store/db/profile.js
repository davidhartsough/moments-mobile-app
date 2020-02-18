const mock = {
  name: "Steve"
};

export function fetchProfile() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(mock), 444);
  });
}
