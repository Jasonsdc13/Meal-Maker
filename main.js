const menu = {
  courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    let dish = {
      name: dishName ,
      price: dishPrice,
    }
    this.courses[courseName].push(dish);
    },

    getRandomDishFromCourse(courseName) {
       let dishes = this.courses[courseName];
       let randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex]
    },

    generateRandomMeal(){
      let appetizer = this.getRandomDishFromCourse('appetizers');
      let main = this.getRandomDishFromCourse('mains');
      let dessert = this.getRandomDishFromCourse('desserts');
      let totalPrice = appetizer.price + main.price + dessert.price
      return `Your meal is ${appetizer.name} and ${main.name}. The price is ${totalPrice}.`;
    }
  };


    menu.addDishToCourse('appetizers', 'tortilla chips and salsa', 4.25);
    menu.addDishToCourse('appetizers', 'salsa', 5.25);
    menu.addDishToCourse('appetizers', 'fries', 6.25);
    menu.addDishToCourse('mains', 'steak', 10.25);
    menu.addDishToCourse('mains', 'burger', 11.25);
    menu.addDishToCourse('mains', 'tacos', 11.25);
    menu.addDishToCourse('desserts', 'ice cream', 7.25);
    menu.addDishToCourse('desserts', 'cheese cake', 8.25);
    menu.addDishToCourse('desserts', 'chocolate cake', 9.25);

    let meal = menu.generateRandomMeal();
    console.log(meal)
