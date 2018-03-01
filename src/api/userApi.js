// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const delay = 0;
const users = [
  {
    id: "cory-house",
    firstName: "Cory",
    lastName: "House"
  },
  {
    id: "scott-allen",
    firstName: "Scott",
    lastName: "Allen"
  },
  {
    id: "dan-wahlin",
    firstName: "Dan",
    lastName: "Wahlin"
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = user => {
  return user.firstName.toLowerCase() + "-" + user.lastName.toLowerCase();
};

class userApi {
  static getAllUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], users));
      }, delay);
    });
  }

  static saveuser(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minuserNameLength = 3;
        if (user.firstName.length < minuserNameLength) {
          reject(
            `First Name must be at least ${minuserNameLength} characters.`
          );
        }

        if (user.lastName.length < minuserNameLength) {
          reject(`Last Name must be at least ${minuserNameLength} characters.`);
        }

        if (user.id) {
          const existinguserIndex = users.findIndex(a => a.id == user.id);
          users.splice(existinguserIndex, 1, user);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new users in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          user.id = generateId(user);
          users.push(user);
        }

        resolve(Object.assign({}, user));
      }, delay);
    });
  }

  static deleteuser(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfuserToDelete = users.findIndex(user => {
          user.userId == userId;
        });
        users.splice(indexOfuserToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default userApi;
