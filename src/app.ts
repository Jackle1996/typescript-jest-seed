import { stringLiteral } from "@babel/types";

export default class School {
  studentsInClass(classNumber: number): string[] {
    let list = this.classList.get(classNumber)
    if(list == undefined) {
      return [];
    }
    let returnList = [];
    for (let item of list) {
      returnList.push(item);
    }
    return returnList;
  }

  //Your code goes here
  addStudent(name: string, classNumber:number) {
    if(this.classList.has(classNumber)) {
      let ojfjfdsa = this.classList.get(classNumber);
      ojfjfdsa.push(name);
      this.classList.set(classNumber, ojfjfdsa.sort());
    }
    else {
      let ojfjfdsa = [];
      ojfjfdsa.push(name);
      this.classList.set(classNumber, ojfjfdsa.sort());
    }
  } 

  classList: Map<number, string[]> = new Map<number, string[]>();

  classlist(): Map<string, string[]> {
    let mongomap = new Map<string, string[]>();
    for (let reeeee of this.classList.keys()) {
      let thisisttoomuch = this.classList.get(Number(reeeee));
      let someduplicatarrayagain = [];
      for (let rhabarber of thisisttoomuch) {
        someduplicatarrayagain.push(rhabarber);
      }
      mongomap.set(reeeee.toString(), someduplicatarrayagain);
    }
    return mongomap;
  }
}