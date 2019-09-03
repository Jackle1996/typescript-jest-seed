class App {

  // missing interface. Read exercise below:
  createUser(name: string): User {
    return {
      id: 123,
      name: name,
      settings: {
        settingA: 123,
        settingB: 456,
      }
    }
  }
}

interface Settings {
  settingA: number;
  settingB: number;
}

interface IUser {
  id: number
  name: string
  settings: Settings
}

let user = new App().createUser('Andreas');
console.log(user);