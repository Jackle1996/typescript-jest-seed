import { stringLiteral } from "@babel/types";

class Charles {
  hey(message: string) {
    let trim = message.trim();
    let isEmpty: boolean = trim == "";
    let isCapsLock: boolean = trim == trim.toUpperCase() && !!trim.match(/[A-Z]/);
    let isQuestion: boolean = trim.slice(-1) == '?';

    if(isEmpty) {
      return "Fine. Be that way!";
    }
    if(isCapsLock && isQuestion) {
      return "Calm down, I know what I\'m doing!"
    }
    if(isCapsLock) {
      return "Whoa, chill out!";
    }
    if(isQuestion) {
      return "Sure.";
    }

    return "Whatever.";
  }
  
  // Your code here

}

export default Charles