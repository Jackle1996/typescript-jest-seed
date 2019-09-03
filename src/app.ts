class App {

  // missing interface. Read exercise below:
  createUser(name: string): IUser {
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

interface ISettings {
  settingA: number;
  settingB: number;
}

interface IUser {
  id: number
  name: string
  settings: ISettings
}

class User implements IUser {
  id: number;  
  name: string;
  settings: ISettings;
  
  constructor(name: string) {
    this.name = name;
  }
}

let user = new App().createUser('Andreas');
console.log(user);