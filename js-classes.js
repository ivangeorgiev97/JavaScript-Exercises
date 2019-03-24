class MainSimpleJSClass {
  //  hobby = 'football';

  constructor() {
    this.hobby = "football";
  }

  printHobby() {
    console.log("Called method from MainSimpleJSClass:");
    console.log(this.hobby);
  }

  /*   printHobby = () => {
    console.log("Called method from MainSimpleJSClass:");
    console.log(this.hobby);
  } */
}

class SimpleJSClass extends MainSimpleJSClass {
  /*     favouriteNumber = 13; 
    hobby = "gaming";  */

  constructor() {
    super();
    this.favouriteNumber = 13;
    this.hobby = "gaming";
  }

  /*   printMyFavouriteNumber = () => {
    console.log(this.favouriteNumber);
    console.log("-----");
  } */

  printMyFavouriteNumber() {
    console.log(this.favouriteNumber);
    console.log("-----");
  }
}

const simpleJSClass = new SimpleJSClass();

simpleJSClass.printMyFavouriteNumber();
simpleJSClass.printHobby();
