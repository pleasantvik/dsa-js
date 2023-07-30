class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }
  // Instance method: They provide functionlaity to a single instantiation of our class

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) return `You are EXPELLED`;
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }

  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }

  calculateAvg() {
    let sum = this.scores.reduce((a, b) => a + b, 0);

    return sum / this.scores.length;
  }

  // CLASS METHODS: They are pertinent to the class itself and not the instance of the class

  static enrollStudents() {
    return `Enrolling Student`;
  }
}

// Instantiate
const studentOne = new Student("Adedayo", "Victor", 3);
const studentTwo = new Student("Bola", "Dorcas");
studentTwo.grade = 5;
studentOne.addScore(92);
studentOne.addScore(87);
console.log(studentOne.calculateAvg());
console.log(studentOne.scores);

//CLASSES METHOD\

console.log(Student.enrollStudents());

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(p1);

console.log(Point.distance(p1, p2));
