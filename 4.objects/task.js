function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.subject = null;
  this.marks = [];
  this.excluded = null;
}

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function(...marksToAdd) {
  if (this.excluded) {
    console.log(`Студент ${this.name} исключен, добавление оценок невозможно.`);
    return;
  }
  this.marks.push(...marksToAdd);
};

Student.prototype.getAverage = function() {
  if (!this.marks || this.marks.length === 0) {
    return 0;
  }
  const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
  return sum / this.marks.length;
};

Student.prototype.exclude = function(reason) {
  this.subject = null;
  this.marks = [];
  this.excluded = reason;
  console.log(`Студент ${this.name} был исключен по причине: ${reason}`);
};