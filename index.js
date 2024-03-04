class GDSTea {
    constructor(teaType, brewingMethod) {
      this.teaType = teaType;
      this.brewingMethod = brewingMethod;
      this.isBrewed = false;
    }
  
    brew() {
      console.log(`Brewing a cup of ${this.teaType} tea using the ${this.brewingMethod} method.`);
      setTimeout(() => {
        this.isBrewed = true;
        console.log(`Your ${this.teaType} tea is ready to bring you Great Delicious Sips!`);
      }, 3000); // Simulate a 3-second brewing time
    }
  
    enjoy() {
      if (this.isBrewed) {
        console.log(`Savoring the Great Delicious Sips of ${this.teaType} tea brewed using the ${this.brewingMethod} method.`);
      } else {
        console.log('Your tea is not brewed yet. Please wait for the brewing process to complete.');
      }
    }
  }
  
  // Example usage:
  const gdsTea = new GDSTea('Chai', 'traditional');
  gdsTea.brew();
  setTimeout(() => gdsTea.enjoy(), 4000); // Enjoy after 4 seconds
  